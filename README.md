# Premium Dark Portfolio Landing Page

A sophisticated, fully-featured portfolio landing page built with React, Vite, TypeScript, and standard CSS (no Tailwind). Features HLS video backgrounds, smooth animations with GSAP and Framer Motion, parallax effects, and a premium dark design system.

## 🎨 Features

✅ **Loading Screen** - Animated counter (000→100) with rotating words  
✅ **Navbar** - Sticky pill design with smooth scroll detection  
✅ **Hero Section** - HLS streaming video background with scroll indicator  
✅ **Selected Works** - Bento grid layout with hover overlays  
✅ **Journal** - Article cards with metadata  
✅ **Explorations** - Parallax gallery with GSAP scroll triggers  
✅ **Stats** - Animated statistics grid  
✅ **Contact/Footer** - GSAP marquee, CTA button, social links  

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Standard CSS** - No utility frameworks
- **GSAP** - Advanced animations & scroll effects
- **Framer Motion** - Component animations
- **HLS.js** - Video streaming
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Project Structure

```
├── index.html
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Main app component
│   ├── index.css             # Complete design system & styles
│   └── components/
│       ├── LoadingScreen.tsx  # Animated loading screen
│       ├── Navbar.tsx         # Navigation bar
│       ├── Hero.tsx           # Hero section
│       ├── Works.tsx          # Project showcase
│       ├── Journal.tsx        # Article cards
│       ├── Explorations.tsx   # Parallax gallery
│       ├── Stats.tsx          # Statistics
│       └── Contact.tsx        # Contact & footer
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Color Palette (HSL)
- **Background**: `0 0% 4%`
- **Surface**: `0 0% 8%`
- **Text**: `0 0% 96%`
- **Muted**: `0 0% 53%`
- **Stroke**: `0 0% 12%`
- **Accent Gradient**: `linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)`

### Typography
- **Body**: Inter (300–700)
- **Display**: Instrument Serif (italic, 400)

### Animations
- Scroll-triggered parallax
- Framer Motion entrance animations
- GSAP timelines for complex sequences
- CSS keyframe animations

## 🔧 Customization

### Update Colors
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --bg: 0 0% 4%;
  --surface: 0 0% 8%;
  /* ... */
}
```

### Update Content
Modify component props and data directly in each component file.

### Add New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Style using the design system variables

## 📱 Responsive Design

The design is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML
- Focus states on interactive elements
- Reduced motion support via `prefers-reduced-motion`
- ARIA labels on icon buttons
- Keyboard navigable

## 🎬 Video Sources

The portfolio uses HLS streaming video from Mux:
- **URL**: `https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8`
- Replace with your own HLS URL in `src/components/Hero.tsx` and `src/components/Contact.tsx`

## 📄 License

Free to use and modify. Enjoy!

---

**Built with ❤️ using React, Vite, and CSS**
