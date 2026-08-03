# Backend Deployment on Render

## Prerequisites
- GitHub account with the Trio repository
- Render account (free tier available)
- Resend API key

## Deployment Steps

### 1. Prepare the Repository
The backend is already configured with:
- `render.yaml` - Render configuration file
- `backend/` folder with Express server
- Updated `package.json` with correct start script

### 2. Deploy to Render

#### Option A: Using render.yaml (Recommended)
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `abhishekchaurasia0707/Trio`
4. Render will automatically detect the `render.yaml` file
5. Review and deploy

#### Option B: Manual Setup
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `abhishekchaurasia0707/Trio`
4. Configure:
   - **Name**: trio-backend
   - **Root Directory**: backend
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free

### 3. Set Environment Variables
In Render dashboard, add these environment variables:

```
NODE_ENV=production
PORT=10000
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=your_email@example.com
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### 4. Update Frontend CORS
After deployment, update your frontend's API URL:
- Get the backend URL from Render (e.g., `https://trio-backend.onrender.com`)
- Update the API endpoint in your frontend code

### 5. Test the Deployment
1. Check the Render dashboard for deployment status
2. Test the health endpoint: `https://trio-backend.onrender.com/health`
3. Test the contact form on your frontend

## Important Notes

- **Free Tier Limitations**: Render free tier spins down after 15 minutes of inactivity. First request may take ~30 seconds.
- **Port**: Render uses port 10000 by default (configured in render.yaml)
- **Health Check**: The `/health` endpoint is included for monitoring
- **Rate Limiting**: Contact form is rate-limited to 10 requests per 15 minutes per IP

## Troubleshooting

### Build Fails
- Check Render logs for specific error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 502 Bad Gateway
- Server may be spinning up (wait 30 seconds)
- Check if PORT environment variable is set correctly

### CORS Errors
- Verify FRONTEND_URL environment variable
- Check CORS configuration in `server/index.js`

## Monitoring
- View logs in Render dashboard
- Set up health check monitoring
- Monitor rate limiting logs
