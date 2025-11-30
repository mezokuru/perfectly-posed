# Perfectly Posed by Tamaryn

A soft, timeless photography portfolio website featuring elegant design, masonry gallery layouts, and comprehensive service showcases.

## Features

### Design & Layout
- **Soft & Timeless Design** - Feminine elegance with warm neutrals, botanical elements, and glassmorphism effects
- **Masonry Gallery** - Dynamic, unorthodox layout that embraces natural image dimensions
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Multiple Pages** - Home, Gallery, About, Contact, and custom 404 pages
- **Custom 404 Page** - Elegant error page with navigation

### Interactive Features
- **Lightbox Gallery** - Full-screen image viewer with keyboard navigation (arrow keys, Escape)
- **Filterable Portfolio** - 8 categories with smooth filtering
- **Parallax Animations** - Botanical elements with mouse-tracking
- **Smooth Transitions** - Hover effects and loading animations throughout
- **Lazy Loading** - Optimized image loading for performance

### SEO & Social Media
- **Comprehensive Meta Tags** - Open Graph and Twitter Card support
- **SEO Optimized** - Descriptive titles, meta descriptions, and keywords
- **Social Media Ready** - Proper image previews when shared
- **Custom Favicon** - SVG logo favicon

### Production Ready
- **Netlify Configuration** - Ready for instant deployment
- **Security Headers** - XSS protection, frame options, content type
- **Caching Strategy** - Optimized cache headers for performance
- **No Dependencies** - Pure HTML/CSS/JS (vanilla)

## Structure

```
├── index.html              # Homepage with hero, gallery showcase, and services
├── gallery.html            # Full portfolio with filterable categories
├── about.html              # About page with bio, values, and detailed services
├── contact.html            # Contact page with form and information
├── 404.html                # Custom error page
├── styles.css              # All styling including responsive design
├── script.js               # Interactive features, gallery filtering, and lightbox
├── netlify.toml            # Netlify deployment configuration
├── _redirects              # Custom redirect rules
├── _headers                # Security and caching headers
├── DEPLOYMENT.md           # Complete deployment guide
├── IMAGE-OPTIMIZATION.md   # Image optimization guide
├── CHANGELOG.md            # Version history and changes
└── assets/                 # Portfolio images
    ├── 21st/              # Birthday event photography
    └── events/            # Awards ceremony photography
```

## Customization Guide

### Adding Images

Replace placeholder images in `gallery.html` with your portfolio images:

```html
<a class="photo" href="#" data-category="weddings">
  <img src="assets/your-image.jpg" alt="Description">
</a>
```

Categories: `weddings`, `couples`, `maternity`, `family`, `portraits`, `events`, `brand`

### Updating Content

**Brand Name & Tagline** - Update in all HTML files:
```html
<h1>Your Name</h1>
<p>Your tagline</p>
```

**Contact Information** - Update in `contact.html`:
- Email address
- Phone number
- Location
- Social media links

**About Section** - Update bio and story in `about.html`

**Services** - Modify service descriptions in `index.html` and `about.html`

### Color Customization

Edit CSS variables in `styles.css`:

```css
:root{
  --cream:#f8f3ed;
  --blush:#f6e6e9;
  --sage:#bfcfbd;
  --warm-neutral:#e9e0d6;
  --gold:#cfa86b;
  --charcoal:#2c2a29;
  --muted:#7a6f6a;
}
```

### Form Integration

The contact form currently shows an alert. Replace with your backend:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option 3: Custom Backend**
Update the `onsubmit` handler in `contact.html`

## Deployment

### Netlify (Recommended)

**Quick Deploy**:
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Deploy! (No build command needed)

**Drag & Drop**:
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Instant deployment!

**Post-Deployment Checklist**:
- [ ] Update URLs in meta tags with your actual domain
- [ ] Configure contact form (Netlify Forms or custom backend)
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)
- [ ] Test all pages and features
- [ ] Optimize images (see IMAGE-OPTIMIZATION.md)

📖 **See DEPLOYMENT.md for complete deployment guide**

### Manual Deployment

Upload all files to your web host via FTP/SFTP. No build process required - all files are static HTML/CSS/JS.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Playfair Display, Inter)

## Performance

- **Lazy Loading** - Images load as needed
- **Optimized Caching** - 1-year cache for static assets
- **Security Headers** - XSS protection, frame options
- **No Dependencies** - Pure vanilla JavaScript
- **Lightweight** - ~3KB JavaScript total
- **Fast Loading** - Optimized for PageSpeed scores 90+

📖 **See IMAGE-OPTIMIZATION.md for image optimization guide**

## Documentation

- **QUICKSTART.md** - Get live in 10 minutes
- **DEPLOYMENT.md** - Complete deployment guide
- **IMAGE-OPTIMIZATION.md** - Image optimization workflow
- **PRE-LAUNCH-CHECKLIST.md** - Pre-launch checklist
- **CHANGELOG.md** - Version history and changes

## Credits

Design & Development: [mezokuru](https://mezokuru.xyz)  
Photography: Perfectly Posed by Tamaryn

## License

All rights reserved. Portfolio content and design are proprietary.

---

**Ready to launch?** See QUICKSTART.md to get started!

