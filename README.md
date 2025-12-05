# V Medha Tech for Social Good - Website

A stunning, professional, production-quality React website for V Medha Tech for Social Good - CBIT's leading technical club dedicated to leveraging technology for positive social impact.

## 🌟 Features

### 🎨 Design & UX
- **Premium Royal Blue Theme**: Deep royal blue, pure white, and light blue accents
- **Glass Morphism Effects**: Modern frosted glass UI components
- **Smooth Animations**: Framer Motion transitions on every page
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Dark Mode Ready**: CSS variables support for theme switching
- **Parallax Effects**: Scroll-based animations throughout

### 📄 Pages
1. **Home** - Hero section with animated gradient backgrounds, floating icons, and call-to-action
2. **About** - Club introduction, timeline, values, and leadership team
3. **Events** - Dynamic event cards with filtering, expandable details, and registrations
4. **Achievements** - Animated achievements display with statistics and impact metrics
5. **Collaborations** - Partner showcase with collaboration highlights
6. **Contact** - Animated contact form, location info, and social links

### 🔧 Tech Stack
- **React 18** - UI Library
- **Vite** - Ultra-fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Router v6** - Multi-page routing
- **Lucide React** - Beautiful icons

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky navigation with glass effect
│   ├── Footer.tsx          # Footer with links and social media
│   ├── Card.tsx            # Reusable card components
│   └── MotionWrapper.tsx    # Animation wrapper components
├── pages/
│   ├── Home.tsx            # Landing page with hero section
│   ├── About.tsx           # Club information and history
│   ├── Events.tsx          # Event listing with filters
│   ├── Achievements.tsx    # Achievements and impact metrics
│   ├── Collaborations.tsx  # Partner organizations
│   └── Contact.tsx         # Contact form and information
├── styles/
│   └── globals.css         # Global styles and animations
├── App.tsx                 # Main app component with routing
├── main.tsx                # React entry point
└── vite-env.d.ts          # Vite type definitions
```

## 🚀 Quick Start

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 🖼️ **Images & Assets**

**Replace these placeholders with your actual images:**

1. **Navbar Logo** - `src/components/Navbar.tsx` (line with "V" text)
2. **About Section Leadership** - `src/pages/About.tsx` (placeholder 👤)
3. **Event Images** - `src/pages/Events.tsx` (emoji placeholders)
4. **Achievement Icons** - `src/pages/Achievements.tsx` (emoji icons)
5. **Partner Logos** - `src/pages/Collaborations.tsx` (emoji placeholders)

**To add images:**
- Place image files in `public/` folder
- Reference them: `<img src="/image-name.png" />`

### 🔗 **URLs & Links to Update**

**Contact Information:**
- `src/components/Footer.tsx` - Line 66-72
  - Email: `contact@vmedha.com`
  - Phone: `+91 XXXXXXXXXX`
  - Social media links

**Contact Page:**
- `src/pages/Contact.tsx` - Line 101-104
  - Email, phone, partnership inquiry email

**Navigation Links:**
- All internal links use React Router (already configured)
- External links: Update in `Footer.tsx` social media links

### 🎨 **Color Customization**

Edit `tailwind.config.js`:
```javascript
colors: {
  'royal': {
    50: '#f0f4ff',   // Lightest
    600: '#4a74ff',  // Primary
    900: '#1a35cc',  // Darkest
  }
}
```

Change the hex values to your desired colors.

### 📱 **Content Customization**

**Home Page Hero:**
- `src/pages/Home.tsx` - Line 80-90 (Tagline and description)

**About Section:**
- `src/pages/About.tsx` - Line 47-62 (Mission and vision text)

**Events:**
- `src/pages/Events.tsx` - Line 24-54 (Event data array)
- Add/remove events from the `events` array

**Achievements:**
- `src/pages/Achievements.tsx` - Line 7-38 (Achievements data)

**Team Members:**
- `src/pages/About.tsx` - Line 215-235 (Leadership section)

### 🔄 **Contact Form Integration**

**Current State:** Form validates locally and shows success message

**To Connect to Backend:**
In `src/pages/Contact.tsx`, replace the `handleSubmit` function (line 20-27):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Send to your backend API
  try {
    const response = await fetch('YOUR_BACKEND_API/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### 🎬 **Animation Tweaks**

Edit animation durations in `tailwind.config.js`:
```javascript
animation: {
  'float': 'float 3s ease-in-out infinite',  // Change 3s to desired duration
  'glow': 'glow 2s ease-in-out infinite',
}
```

Or modify Framer Motion animations directly in component files:
```typescript
transition={{ duration: 0.6 }}  // Adjust duration (in seconds)
```

## 🌐 **Deployment**

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
- Connect your GitHub repo
- Build command: `npm run build`
- Publish directory: `dist`

### Deploy to Any Static Host
```bash
npm run build
# Deploy the 'dist' folder
```

## 📊 **SEO & Meta Tags**

Edit `index.html`:
```html
<meta name="description" content="Your description here" />
<meta name="keywords" content="V Medha, CBIT, Technology, Social Good" />
<title>V Medha Tech for Social Good - CBIT</title>
```

## 🔧 **Environment Variables**

Create `.env.local` for sensitive data:
```
VITE_API_URL=https://your-backend-api.com
VITE_CONTACT_EMAIL=contact@vmedha.com
```

Access in components:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📦 **Dependencies**

All dependencies are already configured in `package.json`:
- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.20.0
- framer-motion@10.16.0
- tailwindcss@3.4.0
- lucide-react@0.292.0

## 🚨 **Troubleshooting**

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Build errors:**
```bash
npm install
npm run build
```

**Styling issues:**
- Ensure `tailwind.config.js` is in root directory
- Clear browser cache (Ctrl+Shift+Delete)

## 📞 **Support**

For questions or issues:
- 📧 Email: contact@vmedha.com
- 🌐 Website: Coming soon!

## 📄 **License**

© 2024 V Medha Tech for Social Good - CBIT. All rights reserved.

---

**Made with ❤️ and ⚡ for social impact**
