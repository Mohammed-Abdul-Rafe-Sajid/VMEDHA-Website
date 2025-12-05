# V Medha Tech Website - Complete Setup & Customization Guide

## 🎯 Overview

This is a **production-ready, professional React website** for V Medha Tech for Social Good with:
- ✅ 6 fully animated pages
- ✅ Glass-morphism UI design
- ✅ Royal blue theme with gradients
- ✅ Responsive mobile/tablet/desktop
- ✅ Contact form integration ready
- ✅ Performance optimized

---

## 🚀 **IMMEDIATE SETUP STEPS**

### Step 1: Install Dependencies
```powershell
npm install
```

### Step 2: Start Development Server
```powershell
npm run dev
```

The site will automatically open at `http://localhost:3000`

### Step 3: Build for Production
```powershell
npm run build
npm run preview  # To preview the build locally
```

---

## 📁 **WHAT TO REPLACE - CRITICAL CUSTOMIZATION**

### 1️⃣ **Replace Club Information**

#### File: `src/pages/About.tsx`
- **Line 47-56**: Update mission statement
- **Line 58-66**: Update vision statement
- **Line 210-235**: Replace placeholder team members with real photos

#### File: `src/pages/Home.tsx`
- **Line 87-89**: Update tagline
- **Line 100-105**: Update hero description

#### File: `src/components/Footer.tsx`
- **Line 45**: Replace contact email
- **Line 52-54**: Replace phone number and location

---

### 2️⃣ **Replace Images & Logos**

All images are currently emojis. Replace them with actual images:

**Steps:**
1. Save your images to `public/` folder
2. Reference them in components

**What to Replace:**

| Location | Current | What to Use |
|----------|---------|------------|
| Navbar Logo | "V" text | Club logo (SVG recommended) |
| Home page icons | 💻🌐💡✨ | High-res PNG/SVG icons |
| Event cards | 💻🌐🤖📚🤝🌟 | Event photos |
| Achievement section | 🏆🥇⭐🎖️ | Medal/trophy images |
| Team section (About) | 👤 | Team member photos |
| Partner logos | 🏢🤝⚡ | Company logos |

**Example - Replace Team Photo:**
```typescript
// Before (Line 215-230 in About.tsx)
<div className="w-full h-64 bg-gradient-royal flex items-center justify-center">
  <span className="text-white/30 text-6xl">👤</span>
</div>

// After
<img 
  src="/team-member-1.jpg" 
  alt="Team Member" 
  className="w-full h-64 object-cover"
/>
```

---

### 3️⃣ **Replace Placeholder URLs & Links**

#### Email Addresses (Update These):
- `src/components/Footer.tsx` - Line 66
- `src/pages/Contact.tsx` - Line 212
- Change: `contact@vmedha.com` → Your actual email

#### Phone Number (Update):
- `src/components/Footer.tsx` - Line 52
- `src/pages/Contact.tsx` - Line 211
- Change: `+91 XXXXXXXXXX` → Actual phone

#### Social Media Links:
`src/components/Footer.tsx` - Lines 27-30:
```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/vmedha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/vmedha', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/vmedha', label: 'Twitter' },
]
```

`src/pages/Contact.tsx` - Lines 267-273:
```typescript
{[
  { name: 'Facebook', icon: '📘', link: 'https://facebook.com/vmedha' },
  { name: 'Instagram', icon: '📷', link: 'https://instagram.com/vmedha' },
  { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/company/vmedha' },
  { name: 'Twitter', icon: '𝕏', link: 'https://twitter.com/vmedha' }
].map((social, idx) => (
  <motion.a
    key={idx}
    href={social.link}  // ← Update these URLs
    className="glass rounded-2xl p-6 text-center flex flex-col items-center hover-scale"
    // ... rest of code
  ))}
```

---

### 4️⃣ **Replace Event Data**

`src/pages/Events.tsx` - Lines 15-54:
```typescript
const events: Event[] = [
  {
    id: 1,
    title: 'Your Event Title',                        // ← Update
    date: 'Dec 15-16, 2024',                         // ← Update
    time: '9:00 AM - 6:00 PM',                       // ← Update
    location: 'Your Location',                        // ← Update
    attendees: 200,
    description: 'Short description',                // ← Update
    fullDescription: 'Long description',             // ← Update
    image: '💻',                                     // ← Replace with image
    category: 'Hackathon'                            // ← Update
  },
  // ... add more events
]
```

---

### 5️⃣ **Replace Achievement Data**

`src/pages/Achievements.tsx` - Lines 10-46:
```typescript
const achievements: Achievement[] = [
  {
    id: 1,
    icon: Trophy,
    title: 'Your Achievement Title',                 // ← Update
    description: 'Achievement description',          // ← Update
    year: 2023,
    highlight: true
  },
  // ... add more achievements
]
```

---

### 6️⃣ **Replace Partner Data**

`src/pages/Collaborations.tsx` - Lines 10-54:
```typescript
const partners: Partner[] = [
  {
    id: 1,
    name: 'Partner Company Name',                    // ← Update
    category: 'Industry Partner',                    // ← Update
    description: 'Collaboration description',        // ← Update
    image: '🏢',                                     // ← Replace with logo
    icon: Building2
  },
  // ... add more partners
]
```

---

## 🎨 **COLOR CUSTOMIZATION**

### Change from Royal Blue to Your Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'royal': {
    50: '#f0f4ff',    // Lightest shade
    100: '#e0e9ff',
    200: '#c1d3ff',
    300: '#a2bdff',
    400: '#8ba7ff',
    500: '#6b91ff',
    600: '#4a74ff',   // Main brand color
    700: '#2e5aff',
    800: '#1e40e8',
    900: '#1a35cc',   // Darkest shade
  },
}
```

**Example: Change to Purple Theme**
```javascript
colors: {
  'royal': {
    50: '#f3e8ff',
    600: '#9333ea',   // Purple
    900: '#581c87',   // Dark purple
  }
}
```

---

## 🔌 **CONTACT FORM BACKEND INTEGRATION**

The contact form currently works locally. To connect it to your backend:

### Option 1: Connect to Firebase
```typescript
// In src/pages/Contact.tsx, update handleSubmit()

import { collection, addDoc } from 'firebase/firestore'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date()
    })
    setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### Option 2: Connect to Your Backend API
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const response = await fetch('https://your-backend.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (response.ok) setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### Option 3: Use Email Service (Formspree, EmailJS)
```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
    .then(() => setSubmitted(true))
}
```

---

## 📊 **SECTION CUSTOMIZATION**

### Update Statistics in About Page
`src/pages/About.tsx` - Lines 117-127:
```typescript
const stats = [
  { number: '500+', label: 'Active Members', delay: 0 },        // ← Update
  { number: '50+', label: 'Projects Completed', delay: 0.1 },   // ← Update
  { number: '25+', label: 'Events Hosted', delay: 0.2 },        // ← Update
  { number: '100+', label: 'Lives Impacted', delay: 0.3 },      // ← Update
]
```

### Update FAQ Section in Contact
`src/pages/Contact.tsx` - Lines 215-237:
```typescript
{[
  {
    q: 'How do I join V Medha?',                     // ← Update Q&A
    a: 'Attend one of our recruitment events...'
  },
  // ... add more FAQs
].map((faq, idx) => (
  // ... render code
))}
```

---

## 📱 **RESPONSIVE DESIGN**

The site is fully responsive. Test by:
```bash
npm run dev
# Open DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
```

Breakpoints used:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

---

## 🔧 **ANIMATION TWEAKS**

### Slow Down All Animations
`tailwind.config.js`:
```javascript
animation: {
  'float': 'float 5s ease-in-out infinite',        // Was 3s
  'glow': 'glow 3s ease-in-out infinite',          // Was 2s
  'pulse-glow': 'pulse-glow 3s ease-in-out infinite',  // Was 2s
}
```

### Speed Up Page Transitions
In any page component, update Framer Motion durations:
```typescript
transition={{ duration: 0.3 }}  // Was 0.6 (faster)
```

---

## 🚀 **DEPLOYMENT**

### Deploy to Vercel (FREE, RECOMMENDED)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Done!

### Deploy to Your Own Server
```bash
npm run build
# Upload 'dist' folder to your server
```

---

## 📊 **SEO OPTIMIZATION**

### Update Page Meta Tags
`index.html`:
```html
<meta name="description" content="V Medha Tech for Social Good - CBIT's leading technical club" />
<meta name="keywords" content="V Medha, CBIT, Technology, Social Good, Hackathon" />
<meta name="author" content="V Medha Tech" />
<meta property="og:title" content="V Medha Tech for Social Good" />
<meta property="og:description" content="Your description here" />
<meta property="og:image" content="/og-image.png" />
```

---

## 🔐 **SECURITY**

### Add Environment Variables
Create `.env.local`:
```
VITE_API_URL=https://your-backend-api.com
VITE_EMAIL_SERVICE_KEY=your-key-here
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🆘 **TROUBLESHOOTING**

| Issue | Solution |
|-------|----------|
| **Port 3000 in use** | `npm run dev -- --port 3001` |
| **Styling broken** | Clear cache: `Ctrl+Shift+Delete` |
| **Build errors** | Delete `node_modules` and `dist`, then `npm install` |
| **Images not showing** | Place in `public/` folder and reference as `/image-name.png` |
| **Animations stuttering** | Reduce animation durations in `tailwind.config.js` |

---

## 📚 **ADDITIONAL RESOURCES**

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Router Docs**: https://reactrouter.com/
- **Lucide Icons**: https://lucide.dev/icons/

---

## 💡 **OPTIONAL ENHANCEMENTS**

1. **Add Blog Section**: Create `src/pages/Blog.tsx`
2. **Add Dark Mode**: Use Tailwind's dark mode class
3. **Add Newsletter**: Add email signup in footer
4. **Add Analytics**: Integrate Google Analytics or Plausible
5. **Add CMS**: Connect to Strapi or Contentful
6. **Add Search**: Add Algolia search
7. **Add Comments**: Add Disqus or similar
8. **Add Chat**: Add Intercom or Zendesk

---

## ✅ **LAUNCH CHECKLIST**

- [ ] Replace all placeholder images with actual images
- [ ] Update all contact information (email, phone)
- [ ] Update social media links
- [ ] Replace event data with real events
- [ ] Replace achievements with real achievements
- [ ] Replace team members with real photos
- [ ] Connect contact form to backend
- [ ] Test on mobile devices
- [ ] Check SEO meta tags
- [ ] Set up email notifications for contact submissions
- [ ] Deploy to production
- [ ] Set up DNS records
- [ ] Enable SSL certificate
- [ ] Monitor performance and errors

---

**Ready to launch? You're all set! 🚀**

Questions? Email: setup@vmedha.com
