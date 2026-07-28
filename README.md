# Trio Power Technologies - Corporate Website

A production-ready, premium corporate website for Trio Power Technologies, an Indian manufacturer of IT Infrastructure products. Built with modern web technologies and optimized for performance and SEO.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Helmet Async** - SEO management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Resend API** - Email service
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting middleware

## 📁 Project Structure

```
trio-power-technologies/
├── public/                 # Static assets
│   ├── logo.svg
│   └── robots.txt
├── server/                 # Backend Express server
│   ├── index.js           # Main server file
│   └── .env.example       # Environment variables template
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Section.jsx
│   │   ├── Card.jsx
│   │   ├── CTABanner.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── FAQ.jsx
│   │   └── TestimonialSlider.jsx
│   ├── data/             # Static data
│   │   └── products.js   # Products, industries, testimonials, FAQs
│   ├── layouts/          # Layout components
│   │   └── Layout.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Industries.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .cloudflare/          # Cloudflare Pages config
├── .env.development      # Development environment variables
├── .env.production       # Production environment variables
├── .env.example          # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── wrangler.toml         # Cloudflare Workers config
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Resend API key (for email functionality)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd trio-power-technologies
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

#### Frontend (.env.development)
```env
VITE_API_URL=http://localhost:5000
```

#### Backend (server/.env)
```env
PORT=5000
FRONTEND_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=your_email@example.com
```

### 4. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add the API key to your server `.env` file

## 🏃 Running the Project

### Development Mode

#### Start Frontend
```bash
npm run dev
```
The frontend will run on `http://localhost:3000`

#### Start Backend (in a new terminal)
```bash
cd server
node index.js
```
The backend will run on `http://localhost:5000`

### Production Build
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Frontend - Cloudflare Pages

#### Option 1: Via Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Set environment variable: `VITE_API_URL=https://your-api-domain.com`
6. Deploy

#### Option 2: Via Wrangler CLI
```bash
npm install -g wrangler
wrangler pages project create trio-power-technologies
wrangler pages publish dist --project-name=trio-power-technologies
```

### Backend - Cloudflare Workers (Recommended)

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Set secrets:
```bash
wrangler secret put RESEND_API_KEY
wrangler secret put EMAIL_FROM
wrangler secret put EMAIL_TO
```

4. Deploy:
```bash
wrangler deploy
```

### Backend - Traditional Node.js Hosting

Alternatively, deploy the backend to:
- Railway
- Render
- Heroku
- DigitalOcean App Platform
- Any Node.js hosting service

Make sure to set environment variables in your hosting platform.

## 📝 Environment Variables

### Frontend Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://api.example.com` |

### Backend Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `FRONTEND_URL` | Frontend URL for CORS | `https://example.com` |
| `RESEND_API_KEY` | Resend API key | `re_xxxxxxxx` |
| `EMAIL_FROM` | Sender email address | `info@triopower.com` |
| `EMAIL_TO` | Recipient email address | `sales@triopower.com` |

## 🎨 Features

### Pages
- **Home** - Hero section, about preview, products showcase, industries, testimonials, FAQ
- **About** - Company story, animated counters, manufacturing process, milestones
- **Products** - Product catalog with filtering, product cards
- **Product Details** - Detailed product view with specifications
- **Industries** - Industries served with detailed information
- **Gallery** - Image gallery with lightbox
- **Contact** - Contact form with map placeholder
- **404** - Custom not found page

### Components
- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Comprehensive footer with links and info
- **Section** - Reusable section wrapper
- **Card** - Multiple card variants (feature, product, industry)
- **CTABanner** - Call-to-action banner
- **AnimatedCounter** - Animated number counter
- **FAQ** - Accordion-style FAQ component
- **TestimonialSlider** - Auto-sliding testimonials

### Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern animations with Framer Motion
- ✅ SEO optimized with React Helmet Async
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Fast performance with Vite
- ✅ Contact form with email notifications
- ✅ Rate limiting on contact endpoint
- ✅ Input validation
- ✅ Error handling
- ✅ Clean, maintainable code structure

## 🎯 Brand Guidelines

### Colors
- **Primary Blue**: `#0B2E6D`
- **Red**: `#E31E24`
- **Gold Accent**: `#F4A300`
- **White**: `#FFFFFF`
- **Light Gray**: `#F8FAFC`
- **Dark Gray**: `#1E293B`

### Fonts
- **Headings**: Poppins
- **Body**: Inter

## 🔧 Customization

### Adding Products
Edit `src/data/products.js` to add or modify products:
```javascript
{
  id: 'product-id',
  name: 'Product Name',
  category: 'category',
  description: 'Product description',
  features: ['Feature 1', 'Feature 2'],
  applications: ['Application 1', 'Application 2'],
  specifications: {
    'Spec': 'Value'
  }
}
```

### Modifying Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0B2E6D',
        // ...
      }
    }
  }
}
```

### Adding Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📊 Performance Optimization

- Code splitting with React Router
- Lazy loading components
- Optimized images (add real images to `public/`)
- Minified production build
- CDN deployment with Cloudflare Pages
- Static site generation for maximum performance

## 🔒 Security

- CORS configured for API requests
- Rate limiting on contact form (10 requests per 15 minutes)
- Input validation on all form fields
- Environment variables for sensitive data
- Security headers configured

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

For support or questions:
- Email: info@triopower.com
- Phone: +91 20 1234 5678

## 📄 License

Copyright © 2024 Trio Power Technologies. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For internal development, please follow the established coding standards and commit conventions.

---

Built with ❤️ for Trio Power Technologies
