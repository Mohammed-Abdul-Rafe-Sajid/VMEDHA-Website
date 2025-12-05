# V Medha Website - Deployment & Production Guide

## 🚀 READY TO DEPLOY? START HERE

This website is **production-ready**. Choose your deployment platform and follow these steps.

---

## ⚡ **QUICKEST DEPLOYMENT (2 minutes)**

### Deploy to Vercel (RECOMMENDED)

1. **Install Vercel CLI**:
```powershell
npm install -g vercel
```

2. **Login to Vercel**:
```powershell
vercel login
```

3. **Deploy**:
```powershell
vercel
```

4. **Follow prompts** - your site goes live instantly!

**Done!** Your site is live at a URL like: `https://vmedha.vercel.app`

---

## 🌐 **DEPLOY TO NETLIFY**

### Method 1: Via Git (Easiest)

1. **Push code to GitHub**:
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/vmedha-website
git push -u origin main
```

2. **Go to Netlify**: https://netlify.com
3. **Click "New site from Git"**
4. **Select GitHub repository**
5. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
6. **Deploy!**

### Method 2: Manual Upload

```powershell
npm run build
# Upload the 'dist' folder to Netlify via drag-and-drop
```

---

## 🏠 **DEPLOY TO YOUR OWN SERVER**

### Build the Site
```powershell
npm run build
```

This creates a `dist/` folder with all static files.

### Upload to Server (FTP/SSH)

1. **Connect to your server** via FTP or SSH
2. **Upload entire `dist/` folder** to your web root
3. **Configure web server** to serve `index.html` for all routes (for React Router)

### Nginx Configuration Example
```nginx
server {
    listen 80;
    server_name vmedha.tech;
    
    root /var/www/vmedha-website/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Apache Configuration Example
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 **DOMAIN SETUP**

### Connect Custom Domain

**For Vercel**:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (Vercel will show you how)

**For Netlify**:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

**For Self-Hosted**:
1. Update DNS A record to point to your server IP
2. Configure SSL certificate (Let's Encrypt - free!)

---

## 🔒 **SSL CERTIFICATE (HTTPS)**

### Vercel & Netlify
✅ **Automatic** - Both provide free SSL certificates

### Self-Hosted with Let's Encrypt
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

---

## 📊 **PERFORMANCE MONITORING**

### Add Google Analytics
1. Create Google Analytics account
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Site Health
- **Uptime**: UptimeRobot (free)
- **Performance**: Lighthouse
- **Errors**: Sentry

---

## 🐛 **POST-DEPLOYMENT CHECKLIST**

- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Mobile responsive works
- [ ] Contact form functional
- [ ] Images load correctly
- [ ] Links work properly
- [ ] Navigation smooth
- [ ] No console errors (F12 → Console)
- [ ] SEO meta tags correct
- [ ] Speed acceptable (< 3s load time)
- [ ] SSL certificate active (https://)
- [ ] Analytics installed
- [ ] Favicon displays

---

## 🚨 **TROUBLESHOOTING DEPLOYMENT**

### Issue: "404 Not Found" on page refresh
**Solution**: Configure server to redirect all routes to `index.html`
- Vercel: Automatic ✅
- Netlify: Automatic ✅
- Other: See Nginx/Apache configs above

### Issue: Images not loading
- Check image paths are relative: `/images/filename.jpg`
- Ensure images in `public/` folder
- Check file names exactly

### Issue: Slow load time
- Run: `npm run build`
- Check with Lighthouse in DevTools
- Optimize images with TinyPNG
- Enable compression on server

### Issue: Contact form not working
- Check email backend is connected
- Verify API endpoint in environment variables
- Check CORS settings if different domain

---

## 📧 **EMAIL NOTIFICATIONS**

### Setup Contact Form Email Notifications

**Option A: Using Formspree**
1. Go to https://formspree.io/
2. Create free account
3. Update contact form:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Option B: Using SendGrid**
```bash
npm install @sendgrid/mail
```

**Option C: Using Gmail (Simple)**
```bash
npm install nodemailer
```

---

## 🔄 **CONTINUOUS DEPLOYMENT**

### Automatic Deploys with Git
All platforms support auto-deploy on git push:

1. Connect GitHub repo
2. Set main/master as deployment branch
3. Every git push automatically deploys!

```powershell
git add .
git commit -m "Update homepage"
git push origin main
# Site updates automatically! 🚀
```

---

## 🔐 **ENVIRONMENT VARIABLES**

Create `.env` for sensitive data:
```
VITE_API_URL=https://your-backend.com
VITE_FORM_API_KEY=your-secret-key
```

Set these in deployment platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & deploy → Environment

---

## 📱 **PROGRESSIVE WEB APP (PWA)**

Make site installable like an app:

1. **Install PWA plugin**:
```bash
npm install vite-plugin-pwa
```

2. **Update vite.config.ts**:
```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'V Medha Tech',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
```

---

## 🎯 **PERFORMANCE TARGETS**

After deployment, aim for:
- **Page Load**: < 3 seconds
- **Lighthouse Score**: > 90
- **Mobile Score**: > 85
- **SEO Score**: 100

Check with: https://pagespeed.web.dev/

---

## 📞 **SUPPORT CONTACTS**

- **Vercel Support**: https://vercel.com/support
- **Netlify Support**: https://netlify.com/support
- **GitHub Issues**: Create issue in repo

---

## 🎉 **LAUNCH COMPLETE!**

Your V Medha Tech website is now live and ready to showcase your club to the world!

**Next Steps**:
1. Share the link on social media
2. Monitor analytics
3. Gather user feedback
4. Plan v2.0 features

---

**Questions? Contact: deploy@vmedha.com**
