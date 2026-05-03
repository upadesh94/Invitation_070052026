# ⚡ Quick Reference Card

## 🎯 Most Common Customizations

### 1. Change Event Date & Time

**File**: `script.js` (Line 4)
```javascript
const eventDate = new Date('2026-05-07T15:00:00').getTime();
//                          YYYY-MM-DDTHH:MM:SS
```

**File**: `index.html` (Lines 45-55)
```html
<p>गुरुवार, 07 मे 2026</p>
<p>दुपारी 03:00 वाजता</p>
```

---

### 2. Change Parent Names

**File**: `index.html` (Line 30)
```html
<p>सौ. आरती गायगोळ व श्री. गोपाल गायगोळ</p>
```

---

### 3. Change Location

**File**: `index.html` (Line 120)
```html
<h3>सोयगाव</h3>
```

---

### 4. Change Phone Numbers

**File**: `index.html` (Lines 140-150)
```html
<p>+91 76668 12421</p>
<a href="tel:+917666812421" class="btn-call">Call Now</a>

<p>+91 72185 60072</p>
<a href="tel:+917218560072" class="btn-call">Call Now</a>
```

---

### 5. Change Colors

**File**: `styles.css` (Lines 5-11)
```css
:root {
    --primary-color: #8B0000;      /* Maroon - Main theme color */
    --secondary-color: #D4AF37;    /* Gold - Accent color */
    --background-color: #FFF8E7;   /* Cream - Page background */
    --text-dark: #2C1810;          /* Dark text */
    --text-light: #5C4033;         /* Light text */
    --card-bg: #FFFFFF;            /* Card backgrounds */
}
```

---

### 6. Update Google Maps

**File**: `index.html` (Line 150)

**Steps:**
1. Go to https://www.google.com/maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace in HTML:

```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

---

### 7. Change Invitation Message

**File**: `index.html` (Lines 75-80)
```html
<p class="invitation-text">
    आमच्या घरात आलेल्या नव्या पाहुण्याच्या नामकरण सोहळ्यास<br>
    आपल्या कुटुंबासह पधारण्याची विनंती.<br>
    आपल्या शुभ उपस्थितीने सोहळा शोभेल अशी आशा आहे.
</p>
```

---

### 8. Change Baby Poem

**File**: `index.html` (Lines 100-105)
```html
<p>
    इवले इवले माझे हात,<br>
    इवले इवले माझे पाय,<br>
    मी आलो आहे तुमच्या घरी,<br>
    आनंद घेऊन नवीन जीवनाचा!
</p>
```

---

## 📁 File Locations

| What to Change | File | Line(s) |
|----------------|------|---------|
| Event Date/Time | `script.js` | 4 |
| Event Date/Time (Display) | `index.html` | 45-55 |
| Parent Names | `index.html` | 30 |
| Location | `index.html` | 120 |
| Phone Numbers | `index.html` | 140-150 |
| Colors | `styles.css` | 5-11 |
| Google Maps | `index.html` | 150 |
| Invitation Text | `index.html` | 75-80 |
| Baby Poem | `index.html` | 100-105 |

---

## 🖼️ Image Requirements

| File Name | Location | Size | Purpose |
|-----------|----------|------|---------|
| `baby-photo.jpg` | `assets/` | 300x300px | Hero section photo |
| `baby-icon.png` | `assets/` | 150x150px | Quote section icon |
| `qr-code.png` | `assets/` | 200x200px | QR code for sharing |
| `music.mp3` | `assets/` | 2-3 min | Background music (optional) |

---

## 🎨 Color Presets

### Traditional Red & Gold (Current)
```css
--primary-color: #8B0000;
--secondary-color: #D4AF37;
--background-color: #FFF8E7;
```

### Royal Blue & Gold
```css
--primary-color: #1E3A8A;
--secondary-color: #D4AF37;
--background-color: #F0F9FF;
```

### Purple & Silver
```css
--primary-color: #6B21A8;
--secondary-color: #C0C0C0;
--background-color: #FAF5FF;
```

### Green & Gold
```css
--primary-color: #065F46;
--secondary-color: #D4AF37;
--background-color: #F0FDF4;
```

---

## 🚀 Quick Deploy Commands

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
# Then enable Pages in Settings
```

### Netlify (Drag & Drop)
1. Go to https://app.netlify.com/drop
2. Drag your project folder
3. Done! Get instant URL

---

## 🔧 Quick Fixes

### Images Not Showing?
```bash
# Check file names (case-sensitive!)
ls -la assets/
# Should see: baby-photo.jpg, baby-icon.png, qr-code.png
```

### Countdown Wrong?
```javascript
// Check date format in script.js line 4
const eventDate = new Date('2026-05-07T15:00:00').getTime();
//                          YYYY-MM-DDTHH:MM:SS
```

### Maps Not Loading?
1. Get new embed code from Google Maps
2. Replace iframe src in index.html line 150

---

## 📱 Test URLs

### Local Testing
```
file:///path/to/your/project/index.html
```

### Python Server
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

### Node Server
```bash
npx serve
# Open: http://localhost:3000
```

---

## 💾 View Stored Data

Open browser console (F12) and type:

```javascript
// View all blessings
JSON.parse(localStorage.getItem('blessings'))

// View all RSVPs
JSON.parse(localStorage.getItem('rsvps'))

// Clear all data
localStorage.clear()
```

---

## 📞 Support Contacts

- +91 76668 12421
- +91 72185 60072

---

## ✅ Pre-Launch Checklist

- [ ] All images added to `assets/` folder
- [ ] Parent names updated
- [ ] Event date & time updated (2 places)
- [ ] Location updated
- [ ] Phone numbers updated
- [ ] Google Maps embed updated
- [ ] QR code generated and added
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] All links working
- [ ] Forms submitting
- [ ] Countdown showing correct time

---

## 🎉 You're Ready!

Once checklist is complete, deploy and share your beautiful invitation! 🎊

**Share via:**
- WhatsApp: Use the share button on the website
- Email: Send the deployed URL
- QR Code: Print on physical cards
- Social Media: Post the link

---

*Quick Reference v1.0 - Last Updated: 2026*
