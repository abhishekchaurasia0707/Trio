import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const resend = new Resend(process.env.RESEND_API_KEY)

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
})

app.use('/api/contact', limiter)

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  // Phone validation (basic)
  if (phone.length < 10) {
    return res.status(400).json({ error: 'Invalid phone number' })
  }

  next()
}

// Contact API endpoint
app.post('/api/contact', validateContactForm, async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'admin@example.com',
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent
    })

    console.log('Email sent successfully:', data)

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    })
  }
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})
