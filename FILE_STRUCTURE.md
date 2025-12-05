# 📁 Complete File Structure Reference

## 🗂️ Full Project Directory

```
c:\Users\abdul\Desktop\Rafe Works\VMEDHA WEBSITE\
│
├── 📄 package.json                 ← Dependencies & scripts
├── 📄 tsconfig.json               ← TypeScript config
├── 📄 tsconfig.node.json          ← TypeScript node config
├── 📄 vite.config.ts              ← Vite build config
├── 📄 tailwind.config.js          ← Tailwind CSS config
├── 📄 postcss.config.js           ← PostCSS config
├── 📄 index.html                  ← HTML template
├── 📄 .gitignore                  ← Git ignore rules
│
├── 📄 README.md                   ← Quick start guide (READ FIRST)
├── 📄 PROJECT_SUMMARY.md          ← Project overview
├── 📄 SETUP_GUIDE.md              ← Detailed customization (MAIN GUIDE)
├── 📄 IMAGES_GUIDE.md             ← Image replacement guide
├── 📄 DEPLOYMENT.md               ← Deployment instructions
│
├── 📁 public/                     ← Static assets (place images here)
│   ├── vite.svg                   ← Replace with vmedha-logo.svg
│   ├── vmedha-logo.svg            ← (Add your logo)
│   ├── favicon.ico                ← (Add your favicon)
│   ├── hero-banner.jpg            ← (Add hero background)
│   └── images/                    ← (Create this folder)
│       ├── team-member-1.jpg      ← (Add team photos)
│       ├── team-member-2.jpg
│       ├── team-member-3.jpg
│       ├── event-hackathon.jpg    ← (Add event images)
│       ├── event-workshop.jpg
│       ├── event-seminar.jpg
│       ├── event-networking.jpg
│       ├── event-opensource.jpg
│       ├── event-showcase.jpg
│       ├── partner-1-logo.png     ← (Add partner logos)
│       ├── partner-2-logo.png
│       ├── partner-3-logo.png
│       ├── partner-4-logo.png
│       ├── partner-5-logo.png
│       └── partner-6-logo.png
│
└── 📁 src/                        ← Source code
    │
    ├── 📁 components/             ← Reusable React components
    │   ├── Navbar.tsx             ← Navigation bar (sticky, animated)
    │   ├── Footer.tsx             ← Footer with links & social
    │   ├── Card.tsx               ← Card, Button, Badge components
    │   └── MotionWrapper.tsx       ← Animation wrapper components
    │
    ├── 📁 pages/                  ← Page components (one per route)
    │   ├── Home.tsx               ← Landing page / homepage
    │   │   └── Features:
    │   │       - Hero section with gradient
    │   │       - Floating animated icons
    │   │       - Mission & Vision sections
    │   │       - Call-to-action buttons
    │   │
    │   ├── About.tsx              ← Club information page
    │   │   └── Features:
    │   │       - Club introduction
    │   │       - Timeline of achievements
    │   │       - Core values section
    │   │       - Leadership team display
    │   │       - Statistics (500+ members, etc.)
    │   │
    │   ├── Events.tsx             ← Events listing page
    │   │   └── Features:
    │   │       - Event cards with filters
    │   │       - Expandable event details
    │   │       - Category filtering
    │   │       - Email subscription
    │   │       - Event registration CTA
    │   │
    │   ├── Achievements.tsx       ← Achievements & awards page
    │   │   └── Features:
    │   │       - Animated achievement cards
    │   │       - Statistics section
    │   │       - Featured project showcase
    │   │       - Recognition highlights
    │   │
    │   ├── Collaborations.tsx     ← Partners & collaborations
    │   │   └── Features:
    │   │       - Partner logo grid
    │   │       - Collaboration highlights
    │   │       - Partnership benefits
    │   │       - Call-to-action for partnerships
    │   │
    │   └── Contact.tsx            ← Contact page
    │       └── Features:
    │           - Contact form (animated)
    │           - Contact information cards
    │           - Social media links
    │           - FAQ section
    │           - Success message animation
    │
    ├── 📁 styles/                 ← Global styles
    │   └── globals.css            ← Global CSS, animations, utilities
    │
    ├── App.tsx                    ← Main app component with React Router
    ├── main.tsx                   ← React entry point
    └── vite-env.d.ts             ← Vite type definitions
```

---

## 📝 **FILE DESCRIPTIONS**

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies, scripts, metadata |
| `tsconfig.json` | TypeScript compiler options |
| `vite.config.ts` | Vite build & dev server config |
| `tailwind.config.js` | Tailwind CSS color & theme config |
| `postcss.config.js` | PostCSS plugins (Tailwind) |
| `index.html` | HTML template, entry point |

### Documentation

| File | Purpose | READ PRIORITY |
|------|---------|---------------|
| `README.md` | Quick start & overview | 1️⃣ First |
| `PROJECT_SUMMARY.md` | Complete project summary | 2️⃣ Second |
| `SETUP_GUIDE.md` | Detailed customization guide | 3️⃣ Main Reference |
| `IMAGES_GUIDE.md` | Image replacement instructions | 4️⃣ When adding images |
| `DEPLOYMENT.md` | Deployment instructions | 5️⃣ Before going live |

### React Components

#### Base Components (`src/components/`)

**Navbar.tsx** (80 lines)
- Fixed navigation bar
- Glass morphism design
- Mobile hamburger menu
- Active link highlighting
- Smooth animations

**Footer.tsx** (120 lines)
- Footer with brand info
- Quick links navigation
- Contact information
- Social media links
- Copyright & policies

**Card.tsx** (100 lines)
- Reusable Card component
- GradientButton component
- SectionTitle component
- Badge component
- Hover effects

**MotionWrapper.tsx** (60 lines)
- MotionWrapper (general animations)
- FadeIn (fade animation)
- SlideIn (slide animation)
- Viewport observers

#### Page Components (`src/pages/`)

**Home.tsx** (250 lines)
- Hero section with gradient
- Floating animated icons
- Features section
- Mission & Vision cards
- CTA section

**About.tsx** (280 lines)
- Club introduction
- Timeline section
- Values grid
- Statistics showcase
- Team members section

**Events.tsx** (200 lines)
- Event data array (6 events)
- Expandable event cards
- Category filtering
- Event details modal
- Email subscription form

**Achievements.tsx** (220 lines)
- Achievement cards (8+ items)
- Statistics section
- Featured project section
- Recognition highlights
- Achievement timeline

**Collaborations.tsx** (210 lines)
- Partner data array (6+ partners)
- Partner card grid
- Partnership benefits
- Collaboration highlights
- Partnership CTA

**Contact.tsx** (230 lines)
- Contact form (animated)
- Form validation
- Success message
- Contact info cards
- Social media links
- FAQ section

### Core Files

| File | Lines | Purpose |
|------|-------|---------|
| `App.tsx` | 30 | Main app component with Router |
| `main.tsx` | 8 | React DOM mount point |
| `globals.css` | 150 | Global styles & animations |

---

## 🔧 **HOW TO FIND & EDIT CONTENT**

### Find Something to Edit? Use This Guide

#### Change Email Address
→ Search for `contact@vmedha.com` (found in 2 places)

#### Change Phone Number
→ Search for `+91 XXXXXXXXXX` (found in 2 places)

#### Update Event Data
→ Open `src/pages/Events.tsx` → Line 15-54 → Edit `events` array

#### Update Achievements
→ Open `src/pages/Achievements.tsx` → Line 10-46 → Edit `achievements` array

#### Update Partners
→ Open `src/pages/Collaborations.tsx` → Line 10-54 → Edit `partners` array

#### Update Team Members
→ Open `src/pages/About.tsx` → Line 215-235 → Edit team section

#### Change Colors
→ Open `tailwind.config.js` → Scroll to `colors` → Edit RGB/hex values

#### Change Animations
→ Open `tailwind.config.js` → Scroll to `animation` & `keyframes` sections

---

## 📊 **LINE NUMBERS REFERENCE**

### Important Line Numbers for Customization

```
src/pages/Home.tsx
  - Line 87-89: Hero tagline
  - Line 100-105: Hero description

src/pages/About.tsx
  - Line 47-56: Mission statement
  - Line 58-66: Vision statement
  - Line 215-235: Team members

src/pages/Events.tsx
  - Line 24-54: Event data

src/pages/Achievements.tsx
  - Line 10-46: Achievement data
  - Line 165: Featured project image

src/pages/Collaborations.tsx
  - Line 10-54: Partner data

src/components/Footer.tsx
  - Line 45: Contact email
  - Line 52-54: Phone & location
  - Line 27-30: Social media links

src/components/Navbar.tsx
  - Line 35: Logo display

tailwind.config.js
  - Line 15-27: Color palette
  - Line 32-41: Animations
```

---

## 🚀 **QUICK EDIT LOCATIONS**

### Most Commonly Edited Files

1. **Update Contact Info**: `src/components/Footer.tsx`
2. **Update Events**: `src/pages/Events.tsx`
3. **Update Team**: `src/pages/About.tsx`
4. **Change Colors**: `tailwind.config.js`
5. **Update Partners**: `src/pages/Collaborations.tsx`
6. **Replace Images**: `public/` folder

---

## 📋 **WHAT EACH FOLDER CONTAINS**

### `src/components/`
✓ Reusable React components used across pages
✓ No page-specific logic here
✓ Focus: Presentational & layout components

### `src/pages/`
✓ Full page components
✓ Each file represents one route
✓ Contains page-specific data & logic
✓ Use components from `src/components/`

### `src/styles/`
✓ Global CSS and animations
✓ Tailwind directives
✓ Custom utility classes
✓ Shared animations

### `public/`
✓ Static assets (images, fonts, favicon)
✓ Not processed by build tool
✓ Referenced directly in code as `/filename`

---

## 💾 **HOW TO ADD NEW FILES**

### Add a New Page

1. Create `src/pages/YourPage.tsx`:
```typescript
import React from 'react'
import { MotionWrapper } from '../components/MotionWrapper'

const YourPage: React.FC = () => {
  return (
    <MotionWrapper>
      <div>Your content</div>
    </MotionWrapper>
  )
}

export default YourPage
```

2. Add to `src/App.tsx`:
```typescript
import YourPage from './pages/YourPage'

<Route path="/your-page" element={<YourPage />} />
```

3. Add to `src/components/Navbar.tsx` navItems array

### Add a New Component

1. Create `src/components/YourComponent.tsx`:
```typescript
import React from 'react'
import { motion } from 'framer-motion'

export const YourComponent: React.FC = () => {
  return <div>Component content</div>
}
```

2. Import in any page:
```typescript
import { YourComponent } from '../components/YourComponent'
```

---

## 🎯 **DEPENDENCIES**

Located in `package.json`, these are already installed:

```json
{
  "dependencies": {
    "react": "18.2.0",              // UI library
    "react-dom": "18.2.0",          // DOM rendering
    "react-router-dom": "6.20.0",   // Routing
    "framer-motion": "10.16.0",     // Animations
    "tailwindcss": "3.4.0",         // Styling
    "lucide-react": "0.292.0"       // Icons
  },
  "devDependencies": {
    "@vitejs/plugin-react": "4.2.0", // Vite React plugin
    "typescript": "5.2.2",           // Type checking
    "vite": "5.0.8",                 // Build tool
    "autoprefixer": "10.4.16",       // CSS autoprefixer
    "postcss": "8.4.31"              // CSS processor
  }
}
```

---

**Need to find something specific? Use Ctrl+F (search) in your code editor!**
