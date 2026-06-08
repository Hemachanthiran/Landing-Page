# 🚀 Complete Setup & Deployment Guide

## Step 1: Project Setup

### For Mac/Linux:

```bash
# Navigate to your projects folder
cd ~/Projects

# Create a new folder for the project
mkdir chandru-landing
cd chandru-landing

# Copy all files from outputs to this folder
# (You'll have package.json, vite.config.js, index.html, src/ folder, etc.)

# Install dependencies
npm install

# Start development server
npm run dev
```

### For Windows:

```bash
# Open Command Prompt or PowerShell

# Navigate to your projects folder
cd C:\Users\YourName\Documents\Projects

# Create a new folder
mkdir chandru-landing
cd chandru-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

## Step 2: Customize Your Content

Open `src/App.jsx` and find the `config` object at the top of the file.

### Update Personal Info:

```javascript
const config = {
  personal: {
    name: 'Chandru',                    // ← Change your name
    title: 'Graphic Designer | Research Enthusiast',  // ← Your title
    shortBio: 'B.Tech Pharmaceutical Technology student...',  // ← Short bio
    longBio: 'I\'m a B.Tech...',        // ← Longer bio
    email: 'your.email@example.com',    // ← Your email
    phone: '+91 XXXXX XXXXX'            // ← Your phone
  },
```

### Add Your Social Links:

```javascript
links: [
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/yourprofile',  // ← Change to your profile
    color: '#E4405F',
    backgroundColor: '#E4405F'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/yourprofile',  // ← Change to your profile
    color: '#0A66C2',
    backgroundColor: '#0A66C2'
  },
  // ... Add all your links
]
```

**Available Icons:**
- `instagram` - #E4405F (Pink)
- `linkedin` - #0A66C2 (Blue)
- `github` - #1F2937 (Dark Gray)
- `behance` - #1473E6 (Blue)
- `researchgate` - #00D084 (Green)

### Add Portfolio Items:

```javascript
portfolio: [
  {
    id: 1,
    name: 'Behance Portfolio',
    description: 'View my complete design portfolio and recent projects.',
    url: 'https://behance.net/yourprofile',
    icon: 'behance',
    color: '#1473E6'
  },
  // ... Add all your portfolio items
]
```

## Step 3: Add Profile Image

### Option 1: Using Emoji (Quick & Easy)
The project uses 👨‍💼 by default. You can change the emoji in `src/App.jsx`:

Find this in the `home` page section:
```jsx
<div className="...">
  👨‍💼
</div>
```

Change to any emoji you like: 👩‍💼 👨‍🎨 👩‍🔬 etc.

### Option 2: Using Your Photo

1. Create a `public/` folder in your project root (if it doesn't exist)
2. Put your image file there (e.g., `public/profile.jpg`)
3. In `src/App.jsx`, find the profile image section and replace:

```jsx
<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl shadow-md border border-gray-300">
  👨‍💼
</div>
```

With:
```jsx
<img 
  src="/profile.jpg" 
  alt="Profile" 
  className="w-24 h-24 rounded-full shadow-md border border-gray-300 object-cover"
/>
```

## Step 4: Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser and test all pages:
- ✓ Home page loads correctly
- ✓ Navigation works (Home, About, Portfolio, Contact)
- ✓ Social links open in new tabs
- ✓ All your content displays correctly
- ✓ Mobile view looks good (resize browser or open on phone)

## Step 5: Deployment

### Option A: Deploy to Vercel (Easiest - Takes 2 minutes)

**Prerequisites:**
- GitHub account (free at github.com)
- Vercel account (free at vercel.com)

**Steps:**

1. **Create GitHub Repository:**
   ```bash
   cd your-project-folder
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   ```

2. **Push to GitHub:**
   - Go to github.com and create a new repository
   - Copy the commands to push your code
   - Paste and run in terminal

3. **Deploy on Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site is live 🎉

Your URL will be something like: `https://chandru-landing.vercel.app`

### Option B: Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Go to netlify.com
3. Drag & drop the `dist/` folder onto Netlify
4. Your site is live! 🎉

### Option C: Deploy to GitHub Pages (Free)

1. Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chandru-landing/',  // ← Change to your repo name
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
npm install -g gh-pages
npx gh-pages -d dist
```

3. Go to your GitHub repository Settings → Pages
4. Select "Deploy from a branch"
5. Select "gh-pages" branch
6. Your site is live!

Your URL will be: `https://yourgithubusername.github.io/chandru-landing`

### Option D: Deploy Anywhere Else

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder to:
   - Your web hosting provider's file manager
   - Or use FTP/SFTP
   - Or use any deployment tool (AWS, Google Cloud, etc.)

## Step 6: Update SEO (Search Engines)

Edit `index.html` and update these tags:

```html
<meta name="description" content="Chandru - Graphic Designer & Research Enthusiast. B.Tech Pharmaceutical Technology student." />
<meta name="keywords" content="graphic design, pharmaceutical design, research, portfolio" />
<title>Chandru - Graphic Designer & Research Enthusiast</title>
```

## Step 7: Custom Domain (Optional)

If you deployed to Vercel/Netlify and want a custom domain:

1. Buy a domain from:
   - GoDaddy
   - Namecheap
   - Google Domains
   - etc.

2. Update DNS settings to point to your deployment platform
3. Follow platform-specific instructions for domain connection

## 📋 Pre-Deployment Checklist

- [ ] All personal information updated in `config`
- [ ] All social media links updated and correct
- [ ] All portfolio items added with correct URLs
- [ ] Profile image added (emoji or photo)
- [ ] Email and phone number correct
- [ ] Navigation menu working
- [ ] Mobile view looks good
- [ ] No broken links
- [ ] SEO metadata updated in `index.html`
- [ ] Tested in multiple browsers
- [ ] Tested on mobile device

## 🐛 Common Issues & Solutions

### Issue: `npm: command not found`
**Solution:** Install Node.js from nodejs.org

### Issue: Port 5173 already in use
**Solution:** 
```bash
npm run dev -- --port 3000
```

### Issue: Module not found errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styles not loading
**Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Images not showing
**Solution:** Make sure images are in `public/` folder and paths are correct

### Issue: Links not working
**Solution:** Double-check URLs in `config` object - make sure they start with `https://`

## 🔗 Useful Links

- Node.js Download: https://nodejs.org/
- Git Download: https://git-scm.com/
- GitHub: https://github.com/
- Vercel: https://vercel.com/
- Netlify: https://netlify.com/
- VS Code (recommended editor): https://code.visualstudio.com/

## 📞 Getting Help

1. **Check the README.md** - Has detailed documentation
2. **Google your error message** - Often has solutions
3. **Check Vite docs** - https://vitejs.dev/
4. **Check React docs** - https://react.dev/

---

You're ready to launch! 🚀

If you have any questions, feel free to reach out.
