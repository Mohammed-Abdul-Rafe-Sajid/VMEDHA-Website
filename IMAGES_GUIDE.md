# Image & Assets Replacement Guide

## 📸 ALL IMAGES TO REPLACE

### Priority 1: CRITICAL (Replace Immediately)

#### 1. **Club Logo** (Multiple Locations)
- **Current**: "V" text in a blue box
- **Location**: `src/components/Navbar.tsx` (Line ~35)
- **Recommended Size**: 40x40px, SVG or PNG
- **File**: Save as `public/vmedha-logo.svg` or `.png`

```typescript
// Replace:
<span className="text-white font-bold text-lg">V</span>

// With:
<img src="/vmedha-logo.svg" alt="V Medha" className="w-10 h-10" />
```

---

#### 2. **Hero Background/Banner**
- **Current**: Gradient background with floating icons
- **Location**: `src/pages/Home.tsx` (Line ~50-60)
- **Recommended**: 1920x1080px high-resolution background
- **File**: `public/hero-banner.jpg`

---

#### 3. **Team Member Photos** (3 people)
- **Current**: 👤 emoji placeholder
- **Location**: `src/pages/About.tsx` (Lines ~215-235)
- **Recommended Size**: 400x400px each
- **Files**: 
  - `public/team-member-1.jpg`
  - `public/team-member-2.jpg`
  - `public/team-member-3.jpg`

```typescript
// Replace this entire section:
<div className="w-full h-64 bg-gradient-royal flex items-center justify-center">
  <span className="text-white/30 text-6xl">👤</span>
</div>

// With:
<img 
  src="/team-member-1.jpg" 
  alt="Leadership Member" 
  className="w-full h-64 object-cover rounded-t-2xl"
/>
```

---

### Priority 2: HIGH (Important for Professional Look)

#### 4. **Event Images** (6 events)
- **Current**: Emoji placeholders (💻🌐🤖📚🤝🌟)
- **Location**: `src/pages/Events.tsx` (Lines ~24-54)
- **Recommended Size**: 300x200px each
- **Files**:
  - `public/event-hackathon.jpg`
  - `public/event-workshop.jpg`
  - `public/event-seminar.jpg`
  - etc.

```typescript
// In events array, replace:
image: '💻',

// With:
image: '/event-hackathon.jpg',

// Then update rendering:
<img src={event.image} alt={event.title} className="w-20 h-20 rounded-lg object-cover" />
```

---

#### 5. **Partner Logos** (6 partners)
- **Current**: Emoji placeholders (🏢🤝⚡🌐📚🔬)
- **Location**: `src/pages/Collaborations.tsx` (Lines ~10-54)
- **Recommended Size**: 250x250px, transparent background (PNG)
- **Files**:
  - `public/partner-1-logo.png`
  - `public/partner-2-logo.png`
  - etc.

---

#### 6. **Achievement/Award Icons**
- **Current**: Emoji (🏆🥇⭐🎖️)
- **Location**: `src/pages/Achievements.tsx`
- **Recommended**: Custom SVG icons or high-res PNG (64x64px)
- **Files**: `public/icons/trophy.svg`, etc.

---

### Priority 3: MEDIUM (Enhances UI)

#### 7. **Section Background Images**
- **Locations**: Various sections across all pages
- **Current**: Gradient overlays
- **Recommended**: Subtle pattern images (1920x1080px)
- **Files**: `public/bg-pattern-1.png`, etc.

---

#### 8. **Social Media Icons**
- **Current**: Lucide React icons
- **Location**: `src/components/Footer.tsx`, `src/pages/Contact.tsx`
- **Note**: Already using Lucide icons (no replacement needed unless custom branding)

---

### Priority 4: LOW (Nice to Have)

#### 9. **Featured Project Showcase Image**
- **Current**: 🌍 emoji
- **Location**: `src/pages/Achievements.tsx` (Line ~165)
- **Recommended Size**: 600x400px
- **File**: `public/featured-project.jpg`

---

#### 10. **Favicon & Meta Images**
- **Current**: Vite default
- **Location**: `public/vite.svg`
- **Replace with**: `public/favicon.ico` (32x32px)
- **For Social Sharing**: `public/og-image.png` (1200x630px)

---

## 🗂️ **FILE STRUCTURE FOR IMAGES**

Create this folder structure:
```
public/
├── vmedha-logo.svg          (Logo)
├── favicon.ico              (Browser tab icon)
├── og-image.png             (Social media preview)
├── hero-banner.jpg          (Hero background)
├── featured-project.jpg     (Achievement section)
├── images/
│   ├── team-member-1.jpg
│   ├── team-member-2.jpg
│   ├── team-member-3.jpg
│   ├── event-hackathon.jpg
│   ├── event-workshop.jpg
│   ├── event-seminar.jpg
│   ├── event-networking.jpg
│   ├── event-opensource.jpg
│   ├── event-showcase.jpg
│   ├── partner-1-logo.png
│   ├── partner-2-logo.png
│   └── ... (6 total)
└── icons/
    ├── icon-innovation.svg
    ├── icon-community.svg
    └── ... (custom icons)
```

---

## 🖼️ **HOW TO REPLACE IMAGES IN CODE**

### Example 1: Replace Emoji with Image

**Before:**
```typescript
<motion.div className="w-20 h-20 rounded-lg bg-gradient-royal flex items-center justify-center text-4xl">
  {event.image}
</motion.div>
```

**After:**
```typescript
<motion.div className="w-20 h-20 rounded-lg rounded-lg overflow-hidden">
  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
</motion.div>
```

---

### Example 2: Replace Data Structure

**Before:**
```typescript
image: '💻',  // Emoji

// Render:
<span className="text-6xl">{partner.image}</span>
```

**After:**
```typescript
image: '/images/partner-1-logo.png',  // Image path

// Render:
<img src={partner.image} alt={partner.name} className="w-full h-32 object-contain" />
```

---

## 🎨 **IMAGE SPECIFICATIONS**

| Element | Size | Format | Location |
|---------|------|--------|----------|
| Logo | 200x200px | SVG/PNG | `public/vmedha-logo.svg` |
| Hero Banner | 1920x1080px | JPG | `public/hero-banner.jpg` |
| Team Photos | 400x400px | JPG | `public/images/team-*.jpg` |
| Event Images | 600x400px | JPG | `public/images/event-*.jpg` |
| Partner Logos | 300x300px | PNG | `public/images/partner-*.png` |
| Favicon | 32x32px | ICO | `public/favicon.ico` |
| OG Image | 1200x630px | PNG | `public/og-image.png` |

---

## 🚀 **QUICK REPLACEMENT STEPS**

1. **Prepare your images**:
   - Export at recommended sizes
   - Optimize (compress) for web
   - Use appropriate formats

2. **Create `public/images/` folder**

3. **Place images in public folder**

4. **Update image paths in code**:
   - Search for emoji references
   - Replace with `src="/images/filename.ext"`

5. **Test in browser**:
   - `npm run dev`
   - Check all pages load correctly
   - Verify responsive design

6. **Build and deploy**:
   - `npm run build`
   - Test build: `npm run preview`
   - Deploy to hosting

---

## 💡 **IMAGE OPTIMIZATION TIPS**

### Use TinyPNG for Compression
https://tinypng.com/

### Recommended Formats:
- **Logos**: SVG (scalable, small file size)
- **Photos**: JPG (smaller than PNG for photographs)
- **Icons**: SVG or PNG with transparency
- **Backgrounds**: JPG with optimization

### Image Alt Text
Always add descriptive alt text:
```typescript
<img src="/image.jpg" alt="V Medha team members at hackathon" />
```

---

## 🎬 **EXAMPLE: COMPLETE EVENT REPLACEMENT**

### Step 1: Save Event Images
- Save 6 images to `public/images/event-*.jpg`

### Step 2: Update Event Data
`src/pages/Events.tsx`:
```typescript
const events: Event[] = [
  {
    id: 1,
    title: 'Tech Hackathon 2024',
    // ... other fields ...
    image: '/images/event-hackathon.jpg',  // ← Change this
  },
  // ... rest of events
]
```

### Step 3: Update Rendering
Still in `src/pages/Events.tsx`, find the image rendering (~Line 150):
```typescript
// Before:
<div className="w-20 h-20 rounded-lg bg-gradient-royal flex items-center justify-center text-4xl flex-shrink-0">
  {event.image}
</div>

// After:
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
  <img 
    src={event.image} 
    alt={event.title} 
    className="w-full h-full object-cover"
  />
</div>
```

### Step 4: Test
```bash
npm run dev
# Check Events page in browser
```

---

## 📋 **CHECKLIST**

- [ ] Created `public/images/` folder
- [ ] Saved all required images
- [ ] Updated all image paths in code
- [ ] Replaced emoji with actual images
- [ ] Updated HTML/JSX rendering code
- [ ] Tested in browser (mobile & desktop)
- [ ] Optimized images for web
- [ ] Added alt text to all images
- [ ] Built for production (`npm run build`)
- [ ] Verified in production build (`npm run preview`)

---

**Need help with image editing?**
- **Canva**: https://www.canva.com/ (Free design templates)
- **Figma**: https://www.figma.com/ (Professional design)
- **Adobe Creative Cloud**: https://www.adobe.com/
