# Trio Power Technologies - Project Structure

## Overview
This project is divided into two main parts:
- **Frontend**: React 19 + Vite application
- **Backend**: Express.js API server for contact form

## Directory Structure

```
Trio/
├── frontend/                 # Frontend application
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── layouts/        # Layout components
│   │   ├── data/           # Static data
│   │   ├── styles/         # Global styles
│   │   ├── main.jsx        # App entry point
│   │   └── App.jsx         # Main app component
│   ├── public/             # Static assets
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS config
│   └── postcss.config.js    # PostCSS configuration
│
├── backend/                # Backend API server
│   ├── server/
│   │   └── index.js        # Express server
│   ├── .env.example        # Environment variables template
│   ├── .gitignore          # Git ignore file
│   └── package.json        # Backend dependencies
│
├── .cloudflare/            # Cloudflare Pages config
├── wrangler.toml           # Cloudflare Workers config
├── README.md               # Main documentation
└── package.json            # Root package.json (for monorepo)
```

## Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:3000

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your API keys
npm start
```
Backend runs on: http://localhost:5000

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
FRONTEND_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=info@triopower.com
EMAIL_TO=info@triopower.com
```

## API Endpoints

### POST /api/contact
Submit contact form
- Body: `{ name, company, email, phone, message }`
- Rate limited: 10 requests per 15 minutes
- Sends email via Resend API

## Deployment

### Frontend (Cloudflare Pages)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: Set `VITE_API_URL` to production backend URL

### Backend (Cloudflare Workers)
- Main script: `server/index.js`
- Environment variables: Set all backend env vars

## Development Notes

- Frontend uses React 19 with Vite for fast development
- Backend uses Express.js with Resend for email
- All API URLs come from environment variables
- No hardcoded URLs in the codebase
