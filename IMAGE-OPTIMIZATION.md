# Image Optimization Guide

Complete guide for optimizing images for web performance while maintaining quality.

## Why Optimize Images?

- **Faster Loading**: Smaller files = faster page loads
- **Better SEO**: Google ranks faster sites higher
- **Lower Bandwidth**: Saves data for mobile users
- **Improved UX**: Visitors stay longer on fast sites

## Current Image Status

Your portfolio currently uses:
- **Format**: JPEG
- **Location**: `assets/21st/` and `assets/events/`
- **Optimization**: Not yet optimized

## Optimization Workflow

### Step 1: Organize Your Images

Create a clear folder structure:
```
assets/
├── weddings/
├── couples/
├── maternity/
├── family/
├── portraits/
├── events/
├── brand/
└── originals/  (keep high-res backups here)
```

### Step 2: Resize Images

**Recommended Sizes**:
- Gallery images: 1200-1600px on longest side
- Hero images: 1920px wide
- Thumbnails: 600px wide
- Full-screen lightbox: 2400px max

**Tools**:
- **Photoshop**: File → Export → Export As
- **GIMP** (Free): Image → Scale Image
- **Online**: [Squoosh.app](https://squoosh.app)
- **Bulk**: [ImageMagick](https://imagemagick.org)

**Batch Resize with ImageMagick**:
```bash
# Install ImageMagick first
# Windows: choco install imagemagick
# Mac: brew install imagemagick

# Resize all images in folder to 1600px wide
magick mogrify -resize 1600x -quality 85 -path ./optimized *.jpeg
```

### Step 3: Compress Images

**Online Tools** (Easy):
- [TinyPNG](https://tinypng.com) - Drag & drop, up to 20 images
- [Squoosh](https://squoosh.app) - Advanced controls
- [Compressor.io](https://compressor.io) - Simple interface

**Desktop Tools**:
- **Windows**: [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
- **Mac**: [ImageOptim](https://imageoptim.com/mac)
- **Cross-platform**: [RIOT](https://riot-optimizer.com/)

**Command Line**:
```bash
# JPEG optimization with mozjpeg
magick input.jpg -quality 85 -sampling-factor 4:2:0 output.jpg

# Batch optimize all JPEGs
for %f in (*.jpeg) do magick "%f" -quality 85 "optimized/%f"
```

### Step 4: Convert to Modern Formats

**WebP Format** (30% smaller than JPEG):

Using Squoosh.app:
1. Upload image
2. Select "WebP" in right panel
3. Adjust quality (80-85 recommended)
4. Download

Using ImageMagick:
```bash
# Convert single image
magick input.jpg -quality 85 output.webp

# Batch convert
for %f in (*.jpeg) do magick "%f" -quality 85 "webp/%~nf.webp"
```

**AVIF Format** (50% smaller, newer):
```bash
magick input.jpg -quality 75 output.avif
```

### Step 5: Implement Responsive Images

Update your HTML to serve different sizes:

```html
<picture>
  <source 
    srcset="assets/weddings/photo-800.webp 800w,
            assets/weddings/photo-1200.webp 1200w,
            assets/weddings/photo-1600.webp 1600w"
    sizes="(max-width: 768px) 100vw, 50vw"
    type="image/webp">
  <img 
    src="assets/weddings/photo-1200.jpg" 
    alt="Wedding photography"
    loading="lazy">
</picture>
```

### Step 6: Add Lazy Loading

Already implemented in `script.js`! All gallery images load lazily.

To add to new images:
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

## Recommended Settings

### JPEG Compression
- **Quality**: 80-85 (sweet spot)
- **Progressive**: Yes (loads gradually)
- **Chroma subsampling**: 4:2:0

### WebP Compression
- **Quality**: 80-85
- **Method**: 4-6 (higher = better but slower)

### File Size Targets
- Gallery images: 100-300 KB
- Hero images: 200-500 KB
- Thumbnails: 30-80 KB

## Automation Tools

### Gulp (Build Process)

Install:
```bash
npm install --save-dev gulp gulp-imagemin gulp-webp
```

Create `gulpfile.js`:
```javascript
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('images', () => {
  return gulp.src('assets/**/*.{jpg,jpeg,png}')
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 85, progressive: true })
    ]))
    .pipe(gulp.dest('assets/optimized'));
});

gulp.task('webp', () => {
  return gulp.src('assets/**/*.{jpg,jpeg,png}')
    .pipe(webp({ quality: 85 }))
    .pipe(gulp.dest('assets/webp'));
});
```

Run:
```bash
gulp images
gulp webp
```

### Netlify Image CDN (Paid)

Netlify can automatically optimize images:
1. Enable in Site settings → Build & deploy → Post processing
2. Check "Compress images"
3. Images are automatically optimized on deploy

## Testing Performance

### Before & After Comparison

1. **Original Image Size**: Check file size in Windows Explorer
2. **Optimized Size**: Compare after optimization
3. **Visual Quality**: Open both side-by-side, zoom to 100%

### Page Speed Testing

Test your site:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target scores:
- **Performance**: 90+
- **Largest Contentful Paint**: < 2.5s
- **Total Page Size**: < 3 MB

## Best Practices

### Do's
✅ Keep original high-res files as backups
✅ Optimize before uploading to website
✅ Use descriptive filenames (wedding-ceremony-kiss.jpg)
✅ Add meaningful alt text for SEO
✅ Test on slow connections
✅ Use lazy loading for below-fold images

### Don'ts
❌ Don't over-compress (quality < 75)
❌ Don't use PNG for photos (use JPEG/WebP)
❌ Don't skip alt text
❌ Don't upload RAW files
❌ Don't use images larger than display size
❌ Don't forget to backup originals

## Quick Reference

### File Format Cheat Sheet

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| JPEG | Photos | Universal support | Lossy compression |
| WebP | Photos | 30% smaller | Limited old browser support |
| AVIF | Photos | 50% smaller | Very limited support |
| PNG | Graphics, logos | Lossless | Large file size |
| SVG | Icons, logos | Scalable, tiny | Not for photos |

### Compression Quality Guide

| Quality | Use Case | File Size | Visual Quality |
|---------|----------|-----------|----------------|
| 60-70 | Thumbnails | Smallest | Noticeable artifacts |
| 75-80 | Gallery images | Small | Good balance |
| 85-90 | Hero images | Medium | Excellent |
| 95-100 | Print/download | Large | Perfect |

## Batch Processing Script

Save as `optimize-images.bat` (Windows):
```batch
@echo off
echo Optimizing images...

REM Create output folder
mkdir optimized 2>nul

REM Optimize JPEGs
for %%f in (*.jpg *.jpeg) do (
    echo Processing %%f...
    magick "%%f" -resize 1600x -quality 85 -sampling-factor 4:2:0 "optimized/%%f"
)

echo Done! Check the 'optimized' folder.
pause
```

Run by double-clicking the file.

## Monitoring

### Regular Checks
- Run PageSpeed Insights monthly
- Check image file sizes before uploading
- Monitor total page weight (< 3 MB target)
- Test on mobile devices

### Image Audit Checklist
- [ ] All images under 500 KB
- [ ] Gallery images 100-300 KB
- [ ] All images have alt text
- [ ] Lazy loading enabled
- [ ] WebP versions created (optional)
- [ ] Originals backed up separately

## Resources

### Tools
- [Squoosh](https://squoosh.app) - Best online optimizer
- [ImageOptim](https://imageoptim.com) - Mac batch optimizer
- [TinyPNG](https://tinypng.com) - Simple compression
- [ImageMagick](https://imagemagick.org) - Command line power

### Learning
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

---

**Pro Tip**: Optimize images before uploading. It's easier than optimizing after deployment!

