# Perfectly Posed by Tameron

A soft, timeless photography portfolio website featuring elegant design, masonry gallery layouts, and comprehensive service showcases.

## Features

- **Soft & Timeless Design** - Feminine elegance with warm neutrals, botanical elements, and glassmorphism effects
- **Masonry Gallery** - Dynamic, unorthodox layout that embraces natural image dimensions
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Multiple Pages** - Home, Gallery, About, and Contact pages with consistent navigation
- **Interactive Elements** - Parallax botanical animations, hover effects, and smooth transitions
- **Comprehensive Services** - Showcases full photography repertoire including weddings, events, portraits, maternity, family, brand, and boudoir

## Structure

```
├── index.html          # Homepage with hero, gallery showcase, and services
├── gallery.html        # Full portfolio with filterable categories
├── about.html          # About page with bio, values, and detailed services
├── contact.html        # Contact page with form and information
├── styles.css          # All styling including responsive design
├── script.js           # Interactive features and gallery filtering
└── assets/             # Portfolio images
    ├── 21st/          # Birthday event photography
    └── awards/        # Awards ceremony photography
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

1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically (no build process needed)

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

- Lazy loading images
- Optimized CSS with minimal specificity
- No external dependencies or frameworks
- Lightweight JavaScript (~2KB)

## Credits

Design & Development: RCM  
Photography: Perfectly Posed by Tameron

## License

All rights reserved. Portfolio content and design are proprietary.

---

For questions or support, contact the developer.
