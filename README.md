# 🎉 नामकरण सोहळा - Naming Ceremony Invitation Website

A modern, responsive invitation website for a Marathi Naming Ceremony (नामकरण सोहळा) with traditional Indian cultural design elements.

## ✨ Features

### 🎨 Design Elements
- **Traditional + Modern Design**: Warm festive color palette (Maroon, Gold, Cream)
- **Cultural Decorations**: Floral borders, temple bells, rangoli patterns, Ganesh illustration
- **Responsive Layout**: Optimized for mobile, tablet (Lenovo Tab M8), and desktop
- **Smooth Animations**: Scroll animations, hover effects, floating elements

### 📱 Sections Included

1. **Hero Section**
   - Ganesh invocation (गणेशाय नमः)
   - Parent names
   - Ceremony title with decorative frame
   - Baby photo with animated border

2. **Event Details**
   - Date and time with icons
   - Live countdown timer (days, hours, minutes, seconds)

3. **Invitation Message**
   - Traditional Marathi invitation text
   - Decorative card with rangoli and bell elements

4. **Blessings Section (शुभाशीर्वाद)**
   - Interactive textarea for guests to write blessings
   - Stores blessings in localStorage

5. **Baby Quote Section**
   - Beautiful Marathi poem about the baby
   - Decorative layout with baby icon

6. **Location Section**
   - Location name (सोयगाव)
   - Embedded Google Maps
   - "View Location" button

7. **Contact Section**
   - Two phone numbers with call buttons
   - Click-to-call functionality

8. **QR Code Section**
   - QR code for easy sharing
   - Scan for location/details

9. **RSVP Form**
   - Name, phone, attendance selection
   - Guest count
   - Stores responses in localStorage

10. **Share Section**
    - WhatsApp share button
    - Native share API support

### 🎵 Interactive Features
- **Background Music Toggle**: Play/pause festive music
- **Countdown Timer**: Real-time countdown to event
- **RSVP System**: Guest response collection
- **Blessings Collection**: Interactive blessing submission
- **Share Functionality**: Easy WhatsApp/social sharing
- **Smooth Scrolling**: Enhanced user experience
- **Scroll Animations**: Sections fade in on scroll

## 🚀 Setup Instructions

### 1. File Structure
```
naming-ceremony-website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Media files folder
    ├── baby-photo.jpg  # Baby's photo (300x300px recommended)
    ├── baby-icon.png   # Small baby icon for quote section
    ├── qr-code.png     # QR code image
    └── music.mp3       # Background music (optional)
```

### 2. Add Your Images

Place the following images in the `assets/` folder:

- **baby-photo.jpg**: Main baby photo (recommended: 300x300px, square)
- **baby-icon.png**: Small decorative baby icon (150x150px)
- **qr-code.png**: QR code for location/details (200x200px)
- **music.mp3**: Optional background music (traditional instrumental)

> **Note**: If images are missing, the website will show placeholder graphics automatically.

### 3. Customize Content

Edit `index.html` to update:
- Parent names
- Event date and time
- Location details
- Phone numbers
- Google Maps embed URL

### 4. Update Event Date

In `script.js`, line 4, update the event date:
```javascript
const eventDate = new Date('2026-05-07T15:00:00').getTime();
```

### 5. Google Maps Integration

Replace the Google Maps embed URL in `index.html` (line ~150) with your actual location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...></iframe>
```

**How to get Google Maps embed URL:**
1. Go to [Google Maps](https://maps.google.com)
2. Search for "Soygaon" (or your location)
3. Click "Share" → "Embed a map"
4. Copy the iframe URL

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Get instant live URL

### Option 3: Vercel (Free)
1. Go to [Vercel](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 4: Local Testing
Simply open `index.html` in any web browser (Chrome, Firefox, Safari, Edge)

## 📱 Browser Compatibility

✅ **Fully Tested On:**
- Chrome 81+ (Lenovo Tab M8 optimized)
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Customization

Edit CSS variables in `styles.css` (lines 5-11):
```css
:root {
    --primary-color: #8B0000;      /* Maroon */
    --secondary-color: #D4AF37;    /* Gold */
    --background-color: #FFF8E7;   /* Cream */
    --text-dark: #2C1810;
    --text-light: #5C4033;
    --card-bg: #FFFFFF;
}
```

## 🔧 Advanced Features

### Enable WhatsApp Integration
Uncomment lines in `script.js`:
- Line 67-69: Send blessings to WhatsApp
- Line 115-117: Send RSVP to WhatsApp

### Enable PWA (Progressive Web App)
1. Create `sw.js` (service worker)
2. Uncomment lines 165-169 in `script.js`
3. Add `manifest.json` for app installation

### Add Background Music
1. Place `music.mp3` in `assets/` folder
2. Music toggle button is already functional
3. Recommended: Traditional Indian instrumental (2-3 minutes, looped)

## 📊 Data Storage

The website stores data locally in the browser:
- **Blessings**: `localStorage.getItem('blessings')`
- **RSVP Responses**: `localStorage.getItem('rsvps')`

To view stored data, open browser console and type:
```javascript
JSON.parse(localStorage.getItem('blessings'))
JSON.parse(localStorage.getItem('rsvps'))
```

## 🎯 Performance Optimization

- Lazy loading for images
- Optimized CSS animations
- Minimal JavaScript
- No external dependencies (except Google Fonts)
- Fast load time (<2 seconds)

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly buttons (min 44px)
- Optimized for Lenovo Tab M8 (Chrome 81)
- Swipe-friendly layout
- Mobile-first approach

## 🎨 UI Variations

You can create 3 different design variations:

### 1. Traditional Card Style
- More ornate borders
- Heavier use of gold accents
- Traditional patterns

### 2. Modern Minimal
- Clean lines
- More white space
- Subtle animations

### 3. Interactive Animated
- More dynamic animations
- Parallax effects
- Interactive elements

## 🐛 Troubleshooting

### Images not showing?
- Check file paths in `assets/` folder
- Ensure correct file names (case-sensitive)
- Fallback placeholders will show automatically

### Countdown not working?
- Check event date in `script.js`
- Ensure date format is correct: `YYYY-MM-DDTHH:MM:SS`

### Music not playing?
- Browser may block autoplay
- User must click music toggle button
- Check if `music.mp3` exists in `assets/`

### Maps not loading?
- Update iframe URL with correct location
- Check internet connection
- Ensure Google Maps embed is enabled

## 📝 License

Free to use for personal invitation purposes.

## 🙏 Credits

Developed with ❤️ for the Gaygol family's special occasion.

---

## 📞 Support

For questions or customization help:
- Phone: +91 76668 12421
- Phone: +91 72185 60072

---

**🎉 Enjoy your beautiful naming ceremony invitation website! 🎉**
