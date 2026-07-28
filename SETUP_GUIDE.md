# Trio Power Technologies - Setup Guide

## 📁 Project Organization

This project is organized with clear separation between frontend and backend:

### Current Structure
```
Trio/
├── frontend/              # Frontend application folder
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.js    # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS config
│   ├── postcss.config.js # PostCSS configuration
│   ├── index.html        # HTML template
│   └── src/             # React source code (copied from root)
│
├── backend/              # Backend API server folder
│   ├── package.json      # Backend dependencies
│   ├── server/
│   │   └── index.js     # Express server
│   ├── .env.example     # Environment variables template
│   └── .gitignore       # Git ignore file
│
├── src/                  # Original React source (use this for now)
├── public/              # Static assets
├── server/              # Original server folder (use backend/ instead)
├── index.html          # Original HTML (use frontend/index.html)
├── package.json        # Root dependencies
└── vite.config.js      # Original Vite config
```

## 🚀 Quick Start

### Option 1: Using Current Structure (Recommended for now)

**Frontend:**
```bash
npm install
npm run dev
```
Frontend runs on: http://localhost:3000

**Backend:**
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your Resend API key
node index.js
```
Backend runs on: http://localhost:5000

### Option 2: Using New Structure (Future)

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your Resend API key
npm start
```

## 📝 Environment Variables

### Frontend (.env or frontend/.env)
```
VITE_API_URL=http://localhost:5000
```

### Backend (server/.env or backend/.env)
```
PORT=5000
FRONTEND_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=info@triopower.com
EMAIL_TO=info@triopower.com
```

## 🔧 Getting Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Add it to your backend `.env` file

## 📡 API Endpoints

### POST /api/contact
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "ABC Corp",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "message": "I need a quote for server racks"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Rate Limiting:** 10 requests per 15 minutes per IP

## 🌐 Deployment

### Frontend (Cloudflare Pages)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Environment variable: `VITE_API_URL` (set to production backend URL)

### Backend (Cloudflare Workers)
1. Use `wrangler.toml` configuration
2. Deploy with: `wrangler deploy`
3. Set environment variables in Cloudflare dashboard

## 📚 Project Structure Details

### Frontend Components
- **Navbar.jsx** - Navigation with search and quick actions
- **Footer.jsx** - Footer with links and contact info
- **Section.jsx** - Reusable section wrapper
- **Card.jsx** - Product, feature, and industry cards
- **CTABanner.jsx** - Call-to-action banner
- **AnimatedCounter.jsx** - Animated number counters
- **FAQ.jsx** - Accordion FAQ component
- **TestimonialSlider.jsx** - Client testimonial slider

### Frontend Pages
- **Home.jsx** - Landing page with all sections
- **About.jsx** - Company information and history
- **Products.jsx** - Product catalog with filters
- **ProductDetails.jsx** - Individual product page
- **Industries.jsx** - Industries served
- **Gallery.jsx** - Image gallery with lightbox
- **Contact.jsx** - Contact form and info
- **NotFound.jsx** - 404 error page

## 🎨 Brand Guidelines

### Colors
- **Primary Blue:** #0B2E6D
- **Accent Gold:** #F4A300
- **White:** #FFFFFF
- **Light Gray:** #F8FAFC
- **Dark Gray:** #1E293B

### Fonts
- **Headings:** Poppins
- **Body:** Inter

## 🐛 Troubleshooting

### Backend won't start
- Make sure you have a Resend API key in `.env`
- Check that port 5000 is not in use
- Ensure Node.js is installed (v14+)

### Frontend build errors
- Run `npm install` to install dependencies
- Check that Node.js is installed (v16+)
- Clear cache: `rm -rf node_modules && npm install`

### Contact form not working
- Verify backend is running on port 5000
- Check VITE_API_URL in frontend .env
- Ensure Resend API key is valid
- Check browser console for errors

## 📞 Support

For issues or questions:
- Email: info@triopower.com
- Phone: +91 20 1234 5678
