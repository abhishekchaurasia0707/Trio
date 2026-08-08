import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || 'smtp'
const SEND_TIMEOUT_MS = parseInt(process.env.SEND_TIMEOUT_MS || '8000')

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

let smtpTransporter = null
if (EMAIL_PROVIDER === 'smtp') {
  try {
    smtpTransporter = nodemailer.createTransport({
      pool: true,
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      maxConnections: 5,
      maxMessages: 100,
      connectionTimeout: 10000,
      greetingTimeout: 8000,
      socketTimeout: 15000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      priority: 'high'
    })
    smtpTransporter.on('error', (err) => {
      console.error('SMTP Pool error:', err.message)
    })
    smtpTransporter.verify((error, success) => {
      if (error) {
        console.error('SMTP Transporter verification failed:', error.message)
        console.error('Please check SMTP_USER and SMTP_PASS in .env file.')
      } else {
        console.log('SMTP Transporter (pooled) is ready to send emails.')
      }
    })
  } catch (e) {
    console.error('Failed to create SMTP transporter:', e.message)
  }
}

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(null, true)
    }
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: { error: 'Too many requests, please try again later.' }
})

app.use('/api/contact', limiter)

const validateContactForm = (req, res, next) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  if (phone.length < 10) {
    return res.status(400).json({ error: 'Invalid phone number' })
  }

  next()
}

const buildEmailContent = (name, company, email, phone, message) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">New Contact Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      <tr style="background-color: #f8f9fa;">
        <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 140px;">Name:</td>
        <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
        <td style="padding: 12px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
      </tr>
      <tr style="background-color: #f8f9fa;">
        <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
        <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
        <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
      </tr>
    </table>
    <h3 style="color: #1e3a5f; margin-top: 30px;">Message:</h3>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #c9a227;">
      <p style="margin: 0; line-height: 1.6;">${message}</p>
    </div>
    <p style="color: #6c757d; font-size: 12px; margin-top: 30px; text-align: center;">
      This email was sent from the Trio Power Technologies website contact form.
    </p>
  </div>
`

const emailQueue = []
const QUEUE_RETRY_LIMIT = 2
let queueProcessing = false

const processQueue = async () => {
  if (queueProcessing || emailQueue.length === 0) return
  queueProcessing = true
  while (emailQueue.length > 0) {
    const job = emailQueue.shift()
    const { emailParams, provider, fromAddress, attempts = 0 } = job
    try {
      const t0 = Date.now()
      let sendResult
      if (provider === 'smtp') {
        sendResult = await smtpTransporter.sendMail({ ...emailParams, priority: 'high' })
        console.log(`[Queue] SMTP sent. ID: ${sendResult.messageId} (${Date.now() - t0}ms, attempt ${attempts + 1})`)
      } else if (provider === 'resend') {
        sendResult = await resend.emails.send(emailParams)
        if (sendResult && sendResult.error) throw new Error(`Resend: ${sendResult.error.message || JSON.stringify(sendResult.error)}`)
        console.log(`[Queue] Resend sent. (${Date.now() - t0}ms, attempt ${attempts + 1})`)
        if (fromAddress === 'onboarding@resend.dev') {
          console.log('WARN: Using onboarding@resend.dev sandbox — delivery limited to Resend Audience contacts.')
        }
      }
    } catch (err) {
      console.error(`[Queue] Send failed (attempt ${attempts + 1}/${QUEUE_RETRY_LIMIT + 1}):`, err.message)
      if (attempts < QUEUE_RETRY_LIMIT) {
        emailQueue.unshift({ ...job, attempts: attempts + 1 })
        await new Promise(r => setTimeout(r, 2000 * (attempts + 1)))
      } else {
        console.error(`[Queue] PERMANENTLY FAILED email to ${emailParams.to}. Giving up after ${QUEUE_RETRY_LIMIT + 1} attempts.`)
      }
    }
  }
  queueProcessing = false
}

setInterval(processQueue, 200)

app.post('/api/contact', validateContactForm, (req, res) => {
  const startTime = Date.now()
  let responded = false

  const sendResponse = (statusCode, body) => {
    if (responded) return
    responded = true
    const elapsed = Date.now() - startTime
    console.log(`[${new Date().toISOString()}] /api/contact → ${statusCode} (${elapsed}ms) [queue:${emailQueue.length}]`)
    res.status(statusCode).json(body)
  }

  try {
    const { name, company, email, phone, message } = req.body

    const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_USER || 'onboarding@resend.dev'
    const toAddress = process.env.EMAIL_TO
    const replyTo = email

    if (!toAddress) {
      return sendResponse(500, { error: 'EMAIL_TO is not configured in environment variables.' })
    }

    const emailParams = {
      from: fromAddress,
      to: toAddress,
      subject: `New Contact Form Submission from ${name}`,
      html: buildEmailContent(name, company, email, phone, message),
      replyTo
    }

    if (EMAIL_PROVIDER === 'smtp' && !smtpTransporter) {
      return sendResponse(500, { error: 'SMTP transporter not configured. Set SMTP_USER and SMTP_PASS in .env.' })
    }
    if (EMAIL_PROVIDER === 'resend' && !resend) {
      return sendResponse(500, { error: 'Resend API key not configured. Set RESEND_API_KEY in .env.' })
    }
    if (EMAIL_PROVIDER !== 'smtp' && EMAIL_PROVIDER !== 'resend') {
      return sendResponse(500, { error: `Invalid EMAIL_PROVIDER: ${EMAIL_PROVIDER}. Use 'smtp' or 'resend'.` })
    }

    emailQueue.push({ emailParams, provider: EMAIL_PROVIDER, fromAddress, attempts: 0 })
    setImmediate(processQueue)

    sendResponse(202, {
      success: true,
      queued: true,
      message: 'Thank you for your message. We will get back to you soon.'
    })
  } catch (error) {
    console.error('Error queueing email:', error.message)
    if (error.stack) console.error(error.stack)
    sendResponse(500, {
      error: `Failed to send message. Server error: ${error.message}`
    })
  }
})

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    emailProvider: EMAIL_PROVIDER,
    smtpConfigured: !!smtpTransporter,
    smtpPool: !!smtpTransporter?._pool,
    resendConfigured: !!resend,
    emailTo: process.env.EMAIL_TO ? 'set' : 'NOT SET',
    timeoutMs: SEND_TIMEOUT_MS,
    queueLength: emailQueue.length,
    queueProcessing
  })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

process.on('SIGTERM', async () => {
  console.log(`SIGTERM received. Draining email queue (${emailQueue.length} pending)...`)
  const drainStart = Date.now()
  while ((emailQueue.length > 0 || queueProcessing) && Date.now() - drainStart < 30000) {
    await new Promise(r => setTimeout(r, 200))
  }
  console.log('Closing SMTP pool...')
  if (smtpTransporter) smtpTransporter.close()
  process.exit(0)
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`Email Provider: ${EMAIL_PROVIDER}`)
  console.log(`EMAIL_TO: ${process.env.EMAIL_TO || '(not set - emails will fail!)'}`)
  console.log(`Send Mode: Background Queue (instant API response, max ${SEND_TIMEOUT_MS}ms safety timeout)`)
  if (EMAIL_PROVIDER === 'smtp') {
    console.log(`SMTP Pool: enabled (5 connections, 100 msgs/conn)`)
    console.log(`SMTP Host: ${process.env.SMTP_HOST || 'smtp.gmail.com'}`)
    console.log(`SMTP User: ${process.env.SMTP_USER || '(not set)'}`)
  }
})
