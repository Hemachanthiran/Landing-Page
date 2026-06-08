# 📁 Project File Structure

```
chandru-landing/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
├── README.md               # Main documentation
├── SETUP_GUIDE.md          # Step-by-step setup guide
├── FILE_STRUCTURE.md       # This file
├── public/                 # Static files (create if needed)
│   └── profile.jpg         # Your profile image (optional)
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main component (4 pages: Home, About, Portfolio, Contact)
    ├── App.css             # App-specific styles
    └── index.css           # Global styles and fonts
```

## 📄 File Descriptions

### Root Level

| File | Purpose |
|------|---------|
| `index.html` | HTML entry point - Opens when site loads |
| `package.json` | Lists all npm packages and scripts |
| `vite.config.js` | Vite build configuration |
| `.gitignore` | Tells Git which files to ignore |
| `README.md` | Main documentation |
| `SETUP_GUIDE.md` | Step-by-step setup instructions |

### src/ Folder

| File | Purpose |
|------|---------|
| `main.jsx` | Entry point for React - Mounts App component |
| `App.jsx` | Main component with all 4 pages and configuration |
| `App.css` | App-specific CSS |
| `index.css` | Global styles, fonts, and animations |

## 🎯 What Each File Does

### `index.html`
- The HTML template
- Loads React and your app
- Contains meta tags for SEO
- Update the `<title>` and `<meta name="description">` here

### `package.json`
```json
{
  "name": "chandru-landing-page",
  "scripts": {
    "dev": "npm run dev",      // Start local server
    "build": "npm run build",  // Build for production
    "preview": "npm run preview" // Preview build locally
  },
  "dependencies": {
    "react": "^18.2.0",        // React framework
    "react-dom": "^18.2.0",    // React DOM
    "lucide-react": "^0.263.1" // Icon library
  }
}
```

### `vite.config.js`
- Configures the Vite build tool
- Sets port to 5173
- Auto-opens browser on `npm run dev`
- Change `base` here if deploying to subdirectory

### `src/main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Mounts the App component to the #root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `src/App.jsx`
**Contains:**
- Configuration object (all your content goes here!)
- 4 page components (Home, About, Portfolio, Contact)
- Navigation logic
- Social media icons with brand colors
- Responsive design

**This is the main file you'll customize**

### `src/index.css`
- Global styles for the entire site
- Font imports (DM Sans, Syne)
- CSS variables
- Animations (fadeInUp, fadeInDown, etc.)
- Responsive utilities

### `src/App.css`
- App-specific styles
- Page transition animations

## 🔧 Configuration Object Location

In `src/App.jsx`, find this section (starts around line 10):

```javascript
const config = {
  personal: { ... },
  links: [ ... ],
  portfolio: [ ... ]
}
```

**This is where you customize everything!**

## 📦 Dependencies

Your project uses 3 main packages:

| Package | What It Does |
|---------|-------------|
| `react` | UI library - builds interactive components |
| `react-dom` | Renders React to the browser |
| `lucide-react` | Beautiful SVG icons |

## 🚀 Commands

```bash
npm install      # Install dependencies (run once after cloning)
npm run dev      # Start development server (local testing)
npm run build    # Build for production (creates dist/ folder)
npm run preview  # Preview the built version locally
```

## 📊 File Sizes

- `package.json`: ~300 bytes
- `index.html`: ~400 bytes
- `vite.config.js`: ~200 bytes
- `src/App.jsx`: ~25 KB
- `src/index.css`: ~4 KB
- `src/main.jsx`: ~300 bytes

**Total source code: ~30 KB** (very lightweight!)

## 🎨 Design Configuration in App.jsx

```javascript
// At the top of App.jsx:

const config = {
  // YOUR PERSONAL INFO
  personal: {
    name: 'Chandru',
    title: 'Your Job Title',
    shortBio: 'Used on home page',
    longBio: 'Used on about page',
    email: 'your@email.com',
    phone: '+91 XXXXX XXXXX'
  },

  // YOUR SOCIAL LINKS
  links: [
    {
      name: 'Instagram',
      icon: 'instagram',           // icon name
      url: 'https://instagram.com/yourprofile',
      color: '#E4405F'             // brand color
    },
    // ... more links
  ],

  // YOUR PORTFOLIO ITEMS
  portfolio: [
    {
      id: 1,
      name: 'Project Name',
      description: 'What this project is about',
      url: 'https://link-to-project.com',
      icon: 'behance',
      color: '#1473E6'
    },
    // ... more items
  ]
};
```

## 🔄 Data Flow

```
index.html
    ↓
main.jsx (entry point)
    ↓
App.jsx (main component)
    ├── config object (your data)
    ├── Navigation (Home, About, Portfolio, Contact)
    ├── Pages (rendered based on navigation)
    └── Icons (rendered based on config.links)
```

## 💾 Where to Edit What

| What to Change | Where to Edit |
|---|---|
| Your name, title, bio | `src/App.jsx` - `config.personal` |
| Social links | `src/App.jsx` - `config.links` |
| Portfolio items | `src/App.jsx` - `config.portfolio` |
| Global colors | `src/index.css` - `:root` variables |
| Page fonts | `src/index.css` - `@import url(...)` |
| Layout structure | `src/App.jsx` - page components |
| SEO info | `index.html` - meta tags |

## ✅ Quick Checklist

- [ ] All files downloaded to your computer
- [ ] `npm install` run successfully
- [ ] `npm run dev` starts without errors
- [ ] Site opens at localhost:5173
- [ ] Can navigate between pages
- [ ] Config object is visible in App.jsx

---

You're all set! Start by editing the `config` object in `src/App.jsx`.

For detailed setup instructions, see `SETUP_GUIDE.md`.
