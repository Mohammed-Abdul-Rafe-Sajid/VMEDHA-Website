# ⚡ QUICK START REFERENCE CARD

## 🚀 Start Here (2 minutes)

```powershell
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

**Site opens at:** `http://localhost:3000`

---

## 📖 DOCUMENT READING ORDER

1. **START HERE** → `README.md` (This file - 5 min read)
2. **THEN READ** → `SETUP_GUIDE.md` (Detailed guide - 20 min read)
3. **FOR IMAGES** → `IMAGES_GUIDE.md` (Image replacement - reference)
4. **FOR DEPLOYMENT** → `DEPLOYMENT.md` (Going live - reference)
5. **FOR TASKS** → `LAUNCH_CHECKLIST.md` (Task checklist - use as you go)
6. **REFERENCE** → `FILE_STRUCTURE.md` (Where everything is - reference)

---

## 🔴 MOST IMPORTANT: WHAT TO REPLACE NOW

### URGENT (Do First)

**Replace Images:**
- Logo → `public/vmedha-logo.svg`
- Team (3) → `public/images/team-*.jpg`
- Events (6) → `public/images/event-*.jpg`
- Partners (6) → `public/images/partner-*.png`

**Update Contacts:**
- Email: `src/components/Footer.tsx` Line 66
- Phone: `src/components/Footer.tsx` Line 52

**Update Data:**
- Events: `src/pages/Events.tsx` Line 24-54
- Achievements: `src/pages/Achievements.tsx` Line 10-46
- Partners: `src/pages/Collaborations.tsx` Line 10-54

---

## 🎯 QUICK CUSTOMIZATION CHEAT SHEET

| What to Change | File | Line | What to Do |
|---|---|---|---|
| Club Email | `src/components/Footer.tsx` | 66 | Replace email |
| Phone Number | `src/components/Footer.tsx` | 52 | Replace phone |
| Social Links | `src/components/Footer.tsx` | 30-33 | Update URLs |
| Hero Tagline | `src/pages/Home.tsx` | 87-89 | Update text |
| Mission | `src/pages/About.tsx` | 47-56 | Update text |
| Vision | `src/pages/About.tsx` | 58-66 | Update text |
| Events | `src/pages/Events.tsx` | 24-54 | Edit array |
| Achievements | `src/pages/Achievements.tsx` | 10-46 | Edit array |
| Partners | `src/pages/Collaborations.tsx` | 10-54 | Edit array |
| Team | `src/pages/About.tsx` | 215-235 | Replace photos |
| Colors | `tailwind.config.js` | 15-27 | Edit hex values |

---

## 📁 FOLDER STRUCTURE (Quick View)

```
src/
├── components/       ← Navbar, Footer, Card, MotionWrapper
├── pages/           ← Home, About, Events, Achievements, etc.
├── styles/          ← Global CSS & animations
├── App.tsx          ← Main routing component
└── main.tsx         ← Entry point

public/
└── images/          ← Add all images here
```

---

## 🔧 COMMON TASKS

### Add a New Event
1. Open `src/pages/Events.tsx`
2. Find the `events` array (Line 24)
3. Add new event object:
```typescript
{
  id: 7,
  title: 'New Event',
  date: 'Dec 30, 2024',
  time: '9:00 AM',
  location: 'Location',
  attendees: 100,
  description: 'Description',
  fullDescription: 'Full description',
  image: '/images/new-event.jpg',
  category: 'Workshop'
}
```

### Change Primary Color
1. Open `tailwind.config.js`
2. Find `colors: { 'royal': { ... } }`
3. Change `600: '#4a74ff'` to your color hex
4. Restart dev server

### Add a New Page
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```
3. Add link in `src/components/Navbar.tsx` navItems

---

## ⚙️ TECH STACK AT A GLANCE

- **React 18** - UI framework
- **Vite** - Build tool (lightning fast)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router v6** - Routing

---

## 🎨 DESIGN SYSTEM

**Colors:**
- Primary Blue: `#4a74ff`
- Dark Blue: `#1a35cc`
- Light Blue: `#a2bdff`
- White: `#ffffff`

**Spacing:**
- Uses Tailwind scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px...

**Animations:**
- Page enter: 0.6s ease-out
- Hover effects: 0.3s ease-in-out
- Floating elements: 3s infinite

---

## 📊 PAGE STRUCTURE

Each page has this pattern:
```
1. Hero/Header section (with gradient)
2. Main content (cards, grid, etc.)
3. Additional features (stats, timeline, etc.)
4. CTA section (Call To Action)
5. Footer
```

---

## 🚨 ERROR QUICK FIXES

| Problem | Solution |
|---------|----------|
| `npm install` fails | `npm cache clean --force` |
| Port 3000 in use | `npm run dev -- --port 3001` |
| Images not showing | Check `public/` folder, use `/image.png` paths |
| Styling broken | Clear cache: `Ctrl+Shift+Delete` |
| Build fails | Delete `node_modules/`, reinstall |

---

## 📱 RESPONSIVE BREAKPOINTS

- **Mobile**: 0-640px
- **Tablet**: 640px-1024px
- **Desktop**: 1024px+

Test by resizing browser or using DevTools (F12 → Toggle device toolbar)

---

## 🔗 KEY FILES TO EDIT

**Most Edited:**
1. `src/pages/*.tsx` - Change page content
2. `tailwind.config.js` - Change colors/spacing
3. `public/` - Add images
4. `src/components/Footer.tsx` - Update contact info

**Don't Edit (Usually):**
1. `vite.config.ts` - Build config
2. `tsconfig.json` - TypeScript config
3. `index.html` - HTML template

---

## 🧪 TESTING LOCALLY

```powershell
# Development mode
npm run dev
# → Site loads at http://localhost:3000
# → Hot reload on file changes

# Production build
npm run build
npm run preview
# → Tests optimized build locally
# → Close with Ctrl+C
```

---

## 🚀 DEPLOYMENT SHORTCUTS

**Fastest (Vercel):**
```powershell
npm install -g vercel
vercel
# Follow prompts, site goes live instantly!
```

**Alternative (Netlify):**
1. Push to GitHub
2. Go to netlify.com
3. Connect repo
4. Auto-deploys on git push

---

## 📞 GET HELP

**Problem?** Check these in order:
1. `SETUP_GUIDE.md` (Troubleshooting section)
2. `FILE_STRUCTURE.md` (Find where to edit)
3. `LAUNCH_CHECKLIST.md` (Task-by-task guide)

**Stuck?** Email: setup@vmedha.com

---

## ⏱️ TIMELINE

- **Setup**: 5 minutes
- **Replace Images**: 1-2 days
- **Update Content**: 1-2 days
- **Test**: 1 day
- **Deploy**: 1 day

**Total to Launch: ~5-7 days**

---

## ✨ YOU HAVE

✅ 6 fully built pages
✅ 100+ animations
✅ Responsive design
✅ Professional components
✅ Production-ready code
✅ Deployment ready
✅ Complete documentation

**You don't have to write any code. Just customize content, add images, and deploy!** 🎉

---

## 🎯 NEXT STEPS

1. ✅ Read `README.md`
2. ✅ Run `npm install && npm run dev`
3. ✅ Open `SETUP_GUIDE.md`
4. ✅ Follow the checklist
5. ✅ Deploy! 🚀

---

**Ready? Let's build something amazing!** 💪

`npm install && npm run dev`

**Good luck! 🚀**
