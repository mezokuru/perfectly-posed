# Quick Start Guide

Get your photography portfolio live in 10 minutes!

## Prerequisites

- GitHub account (free)
- Netlify account (free) - sign up at [netlify.com](https://netlify.com)
- Your portfolio images

## Step 1: Customize Content (5 minutes)

### Update Contact Information

Edit `contact.html`:
```html
<!-- Line ~50 -->
<p><a href="mailto:YOUR-EMAIL@example.com">YOUR-EMAIL@example.com</a></p>
<p><a href="tel:+YOUR-PHONE">+YOUR-PHONE</a></p>
```

### Update Social Links

Edit `contact.html`:
```html
<!-- Line ~60 -->
<a href="https://instagram.com/YOUR-HANDLE">Instagram</a>
<a href="https://pinterest.com/YOUR-HANDLE">Pinterest</a>
<a href="https://facebook.com/YOUR-PAGE">Facebook</a>
```

### Add Your Bio

Edit `about.html` - replace the bio text with your story (around line 40).

## Step 2: Add Your Images (Optional)

If you have images ready:

1. Place images in appropriate folders:
   ```
   assets/
   ├── weddings/
   ├── couples/
   ├── maternity/
   ├── family/
   ├── portraits/
   ├── events/
   └── brand/
   ```

2. Update `gallery.html` - replace image paths:
   ```html
   <a class="photo" href="#" data-category="weddings">
     <img src="assets/weddings/your-image.jpg" alt="Wedding ceremony">
   </a>
   ```

**Skip this step for now?** The site works with existing placeholder images!

## Step 3: Deploy to Netlify (3 minutes)

### Option A: Git Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Customize portfolio"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `perfectly-posed` repository
   - Click "Deploy site" (leave settings as default)

3. **Done!** Your site is live at `your-site-name.netlify.app`

### Option B: Drag & Drop (Fastest)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire project folder onto the page
3. Done! Instant deployment

## Step 4: Post-Deployment (2 minutes)

### Update Meta Tags

Replace `https://perfectlyposed.netlify.app/` with your actual URL in:
- `index.html` (lines 15-30)
- `gallery.html` (lines 15-30)
- `about.html` (lines 15-30)
- `contact.html` (lines 15-30)

Search for `og:url`, `og:image`, `twitter:url`, and `twitter:image`.

### Test Your Site

- [ ] Visit your live URL
- [ ] Click through all pages
- [ ] Test contact form (shows alert for now)
- [ ] Test gallery filters
- [ ] Click images to open lightbox
- [ ] Test on mobile device

## Next Steps

### Immediate
1. **Optimize Images** - See IMAGE-OPTIMIZATION.md
2. **Custom Domain** - Add your own domain in Netlify settings
3. **Contact Form** - Set up Netlify Forms (see below)

### Soon
4. **Add More Images** - Replace placeholders with your portfolio
5. **Google Analytics** - Track visitors (see DEPLOYMENT.md)
6. **Social Media** - Share your new site!

## Enable Contact Form (Bonus)

Make your contact form actually work:

1. Edit `contact.html`, find the `<form>` tag (around line 70)

2. Replace:
   ```html
   <form onsubmit="event.preventDefault();alert('Thanks...');">
   ```

   With:
   ```html
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
   ```

3. Commit and push changes

4. View submissions in Netlify dashboard → Forms

## Troubleshooting

### Site Not Loading
- Check Netlify deploy log for errors
- Ensure all files were uploaded
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Images Not Showing
- Check file paths are correct (case-sensitive!)
- Verify images are in `assets/` folder
- Check browser console (F12) for errors

### Form Not Working
- Ensure you added `data-netlify="true"` attribute
- Check Netlify dashboard → Forms
- Look in spam folder for notifications

## Common Customizations

### Change Colors

Edit `styles.css` (line 1):
```css
:root{
  --cream:#f9f6f1;      /* Background */
  --blush:#f8e8eb;      /* Accent background */
  --sage:#c5d5c3;       /* Botanical elements */
  --gold:#d4af37;       /* Buttons & accents */
  --charcoal:#2a2826;   /* Text */
}
```

### Change Fonts

Edit all HTML files, replace in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `styles.css`:
```css
body{
  font-family:'YOUR-FONT', Georgia, serif;
}
```

### Add More Services

Edit `index.html` and `about.html`, add to services section:
```html
<div class="service">
  <h3>Your Service Name</h3>
  <p style="margin:6px 0 0;color:var(--muted)">Service description here.</p>
</div>
```

## Resources

- **Full Deployment Guide**: DEPLOYMENT.md
- **Image Optimization**: IMAGE-OPTIMIZATION.md
- **Version History**: CHANGELOG.md
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)

## Need Help?

- Check DEPLOYMENT.md for detailed guides
- Visit [Netlify Community](https://answers.netlify.com/)
- Review browser console for errors (F12)

---

**Congratulations!** 🎉 Your photography portfolio is live!

Share it with the world and start booking clients.
