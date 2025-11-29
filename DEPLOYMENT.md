# Deployment Guide — Perfectly Posed

Complete guide for deploying your photography portfolio to Netlify.

## Quick Deploy to Netlify

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `perfectly-posed` repository
   - Configure build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Custom Domain** (optional):
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow instructions to configure DNS

### Option 2: Drag & Drop Deploy

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire project folder onto the page
3. Netlify will deploy instantly
4. Note: This method doesn't support continuous deployment

## Post-Deployment Configuration

### 1. Update URLs in Meta Tags

Replace `https://perfectlyposed.netlify.app/` with your actual domain in:
- `index.html`
- `gallery.html`
- `about.html`
- `contact.html`

Search for `og:url`, `og:image`, `twitter:url`, and `twitter:image` tags.

### 2. Configure Contact Form

The contact form currently shows an alert. To make it functional:

**Option A: Netlify Forms** (Easiest)
1. Add `netlify` attribute to form tag:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```
2. Add hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```
3. Redeploy site
4. View submissions in Netlify dashboard → Forms

**Option B: Custom Backend**
- Use services like Formspree, EmailJS, or your own API
- Update form `action` and `onsubmit` handler

### 3. Add Analytics (Optional)

**Netlify Analytics** (Paid):
- Go to Site settings → Analytics
- Enable Netlify Analytics

**Google Analytics** (Free):
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to all HTML files before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 4. Set Up Social Media Links

Update social links in `contact.html`:
```html
<a href="https://instagram.com/yourhandle">Instagram</a>
<a href="https://pinterest.com/yourhandle">Pinterest</a>
<a href="https://facebook.com/yourpage">Facebook</a>
```

## Performance Optimization

### Image Optimization

See `IMAGE-OPTIMIZATION.md` for detailed guide on:
- Compressing images
- Converting to modern formats (WebP)
- Responsive images
- Lazy loading (already implemented)

### Enable Netlify Features

1. **Asset Optimization**:
   - Go to Site settings → Build & deploy → Post processing
   - Enable "Bundle CSS" and "Minify CSS"
   - Enable "Bundle JS" and "Minify JS"
   - Enable "Compress images"

2. **HTTPS**:
   - Automatically enabled by Netlify
   - Force HTTPS in Site settings → Domain management

3. **CDN**:
   - Automatically enabled (Netlify's global CDN)

## Continuous Deployment

Once connected via Git, Netlify automatically deploys when you push to GitHub:

```bash
# Make changes to your site
git add .
git commit -m "Update gallery images"
git push origin main
# Netlify automatically deploys!
```

## Environment Variables (Future Use)

If you need API keys or secrets:
1. Go to Site settings → Environment variables
2. Add variables (e.g., `CONTACT_API_KEY`)
3. Access in build process or serverless functions

## Troubleshooting

### Site Not Loading
- Check Netlify deploy log for errors
- Verify `netlify.toml` configuration
- Ensure all file paths are relative

### Images Not Showing
- Check file paths are correct (case-sensitive)
- Verify images are in `assets/` folder
- Check browser console for 404 errors

### Form Not Working
- Ensure Netlify Forms is properly configured
- Check spam folder for form submissions
- Verify form name matches in Netlify dashboard

### 404 Page Not Working
- Ensure `404.html` exists in root
- Check `_redirects` file is present
- Verify redirect rules in `netlify.toml`

## Custom Domain Setup

### Using Netlify DNS (Easiest)

1. In Netlify: Site settings → Domain management → Add custom domain
2. Enter your domain (e.g., `perfectlyposed.com`)
3. Netlify provides nameservers
4. Update nameservers at your domain registrar
5. Wait for DNS propagation (up to 48 hours)

### Using External DNS

Add these records at your DNS provider:
- **A Record**: `@` → `75.2.60.5`
- **CNAME**: `www` → `your-site.netlify.app`

## Monitoring & Maintenance

### Regular Tasks
- Check Netlify deploy logs weekly
- Monitor form submissions
- Update portfolio images regularly
- Review analytics monthly
- Test site on different devices

### Backup Strategy
- Keep Git repository as source of truth
- Export form submissions monthly
- Save original high-res images separately

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forum](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

---

**Need Help?** Check the Netlify documentation or reach out to their support team.
