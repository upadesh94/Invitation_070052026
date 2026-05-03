# 🚀 Quick Setup Guide

## Step-by-Step Instructions

### 1️⃣ Download/Clone the Project
```bash
# If using Git
git clone <your-repo-url>
cd naming-ceremony-website

# Or simply download and extract the ZIP file
```

### 2️⃣ Add Your Images

Navigate to the `assets/` folder and add these files:

| File Name | Description | Recommended Size |
|-----------|-------------|------------------|
| `baby-photo.jpg` | Main baby photo for hero section | 300x300px (square) |
| `baby-icon.png` | Small icon for quote section | 150x150px |
| `qr-code.png` | QR code for location/details | 200x200px |
| `music.mp3` | Background music (optional) | 2-3 min, looped |

**💡 Tip**: Use free tools like:
- [QR Code Generator](https://www.qr-code-generator.com/) for QR codes
- [Canva](https://canva.com) for image editing
- [TinyPNG](https://tinypng.com) for image compression

### 3️⃣ Customize Your Content

Open `index.html` and update:

#### Parent Names (Line ~30)
```html
<p>सौ. आरती गायगोळ व श्री. गोपाल गायगोळ</p>
```

#### Event Date & Time (Lines ~45-55)
```html
<p>गुरुवार, 07 मे 2026</p>
<p>दुपारी 03:00 वाजता</p>
```

#### Location (Line ~120)
```html
<h3>सोयगाव</h3>
```

#### Phone Numbers (Lines ~140-150)
```html
<p>+91 76668 12421</p>
<p>+91 72185 60072</p>
```

### 4️⃣ Update Event Date in JavaScript

Open `script.js` and update line 4:
```javascript
const eventDate = new Date('2026-05-07T15:00:00').getTime();
//                          YYYY-MM-DDTHH:MM:SS
```

### 5️⃣ Add Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location (e.g., "Soygaon")
3. Click **Share** → **Embed a map**
4. Copy the `<iframe>` code
5. Replace the iframe in `index.html` (around line 150)

Example:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### 6️⃣ Test Locally

Simply **double-click** `index.html` or:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve

# Then open: http://localhost:8000
```

### 7️⃣ Deploy Online (Choose One)

#### Option A: GitHub Pages (Recommended)
```bash
# 1. Create a new repository on GitHub
# 2. Push your code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# 3. Enable GitHub Pages
# Go to: Settings → Pages → Select 'main' branch → Save
# Your site will be live at: https://yourusername.github.io/repo-name
```

#### Option B: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant URL like: `https://your-site.netlify.app`

#### Option C: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically

## 🎨 Customization Tips

### Change Colors
Edit `styles.css` (lines 5-11):
```css
:root {
    --primary-color: #8B0000;      /* Change maroon */
    --secondary-color: #D4AF37;    /* Change gold */
    --background-color: #FFF8E7;   /* Change cream */
}
```

### Change Fonts
Edit `index.html` (line 9) Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Add More Sections
Copy any section from `index.html` and modify the content.

## 📱 Testing Checklist

- [ ] All images load correctly
- [ ] Countdown timer shows correct time
- [ ] Phone call buttons work
- [ ] Google Maps loads
- [ ] RSVP form submits
- [ ] Blessings can be written
- [ ] Share button works
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Music toggle works (if added)

## 🐛 Common Issues

### Issue: Images not showing
**Solution**: 
- Check file names match exactly (case-sensitive)
- Ensure files are in `assets/` folder
- Clear browser cache (Ctrl+F5)

### Issue: Countdown shows wrong time
**Solution**:
- Check date format in `script.js`
- Ensure timezone is correct
- Format: `YYYY-MM-DDTHH:MM:SS`

### Issue: Maps not loading
**Solution**:
- Get new embed code from Google Maps
- Check internet connection
- Ensure iframe is not blocked

### Issue: Music not playing
**Solution**:
- Click the music toggle button (browsers block autoplay)
- Check if `music.mp3` exists
- Try different audio format (MP3, OGG)

## 📞 Need Help?

Contact:
- +91 76668 12421
- +91 72185 60072

## 🎉 You're Done!

Your beautiful naming ceremony invitation website is ready to share! 🎊

**Share the link with:**
- WhatsApp groups
- Email invitations
- Social media
- QR code on physical cards

---

**Made with ❤️ for your special day!**
