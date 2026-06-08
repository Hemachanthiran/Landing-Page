# Chandru's Personal Landing Page

A modern, responsive multi-page landing page with navigation, portfolio links, and contact information. Built with React, Vite, and modern web technologies.

## 📋 Project Structure

```
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main component with all pages
    ├── App.css         # App-specific styles
    └── index.css       # Global styles
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173` automatically.

### 3. Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

## ⚙️ Configuration

All site content is managed from a **single configuration object** in `src/App.jsx`. Find this section near the top:

```javascript
const config = {
  // Personal Information
  personal: {
    name: 'Chandru',
    title: 'Graphic Designer & Research Enthusiast',
    shortBio: 'B.Tech Pharmaceutical Technology student...',
    longBio: 'Longer biography text...',
    email: 'your.email@example.com',
    phone: '+91 XXXXX XXXXX'
  },

  // Social & Profile Links (with brand colors)
  links: [
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/yourprofile',
      color: '#E4405F',
      backgroundColor: '#E4405F'
    },
    // ... more links
  ],

  // Portfolio items
  portfolio: [
    {
      id: 1,
      name: 'Behance Portfolio',
      description: 'View my complete design portfolio...',
      url: 'https://behance.net/yourprofile',
      icon: 'behance',
      color: '#1473E6'
    },
    // ... more items
  ]
};
```

## 📝 How to Customize

### 1. Update Personal Information

Edit the `personal` object with your details:

```javascript
personal: {
  name: 'Your Name',
  title: 'Your Title',
  shortBio: 'Short bio for home page (1-2 lines)',
  longBio: 'Longer bio for about page (2-3 paragraphs)',
  email: 'your@email.com',
  phone: '+91 XXXXXXXXXX'
}
```

### 2. Add/Remove Social Links

Add or remove from the `links` array:

```javascript
links: [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/yourprofile',
    color: '#0A66C2',
    backgroundColor: '#0A66C2'
  },
  // ... more
]
```

**Available Icons:** `instagram`, `linkedin`, `github`, `behance`, `researchgate`

### 3. Update Portfolio Items

Modify the `portfolio` array:

```javascript
portfolio: [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Brief description of the project',
    url: 'https://link-to-project.com',
    icon: 'behance',
    color: '#1473E6'
  },
  // ... more
]
```

### 4. Change Profile Image

Replace the emoji (👨‍💼) with your actual image in `src/App.jsx`:

Find this line in the `home` page:
```jsx
<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl shadow-md border border-gray-300">
  👨‍💼
</div>
```

Replace with:
```jsx
<img src="/your-image.jpg" alt="Profile" className="w-24 h-24 rounded-full shadow-md border border-gray-300 object-cover" />
```

Place `your-image.jpg` in the `public/` folder.

## 🎨 Design Features

- **Clean White Background** - Minimalist, professional design
- **Brand Colors** - Each social platform uses its original brand color
- **4 Pages**:
  - **Home** - Introduction with profile and quick links
  - **About** - Detailed biography and expertise
  - **Portfolio** - Project links and portfolio items
  - **Contact** - Direct contact information and social links
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Fade-in effects and hover transitions
- **Fixed Navigation** - Easy access to all pages

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel automatically detects Vite and builds it
5. Your site is live! 🎉

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist/` folder, or connect your GitHub repo
4. Your site is live! 🎉

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Add to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Run: `npm run deploy`

### Self-Hosted

1. Build: `npm run build`
2. Upload `dist/` folder to your web server
3. Done!

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons and links
- Hamburger navigation menu on mobile
- Optimized font sizes for all screen sizes

## 🔒 SEO & Metadata

Update the meta tags in `index.html`:

```html
<meta name="description" content="Your description here" />
<meta name="keywords" content="your, keywords, here" />
<title>Your Name - Your Title</title>
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Technologies Used

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Core functionality

## 🤝 Contributing

Feel free to customize this template for your own use!

## 📄 License

Free to use and modify for personal projects.

## 💡 Tips

1. **Test locally first** - Run `npm run dev` before deploying
2. **Update all links** - Make sure all URLs are correct
3. **Add a profile image** - Replace the emoji with your photo
4. **Keep content updated** - Regular updates keep visitors engaged
5. **Monitor analytics** - Use Google Analytics to track visitors

## ❓ Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Deployment issues?**
- Check that `dist/` folder is created
- Ensure all dependencies are installed
- Check that environment is Node.js compatible

## 📞 Support

For issues or questions, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)

---

**Happy deploying!** 🚀
