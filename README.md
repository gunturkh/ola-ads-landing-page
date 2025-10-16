# OLA Advertising Landing Page

A simple, single-page HTML/CSS landing page for advertising purposes.

## Features

- **Multi-Language Support** - Full English and Bahasa Indonesia translation with language switcher
- **Fixed Navigation Header** - Sticky header with smooth scroll navigation that changes appearance on scroll
- **Smooth Scrolling** - Auto-scroll to sections with smooth animation when clicking navigation links
- **Active Link Highlighting** - Navigation links highlight based on current scroll position
- **Mobile Responsive Menu** - Hamburger menu for mobile and tablet devices
- **WhatsApp Integration** - Direct WhatsApp links with language-specific pre-filled messages
- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **OLA Brand Colors** - Uses your brand's orange color scheme (#E87D2F)
- **Hero Section** - Eye-catching hero with your existing hero image
- **Services Section** - Showcases Buy for You, Ship for You, and Source for You services
- **Why Choose OLA** - Highlights key benefits with checkmarks
- **How It Works** - 4-step process explanation
- **Call-to-Action** - Prominent CTA section to drive conversions
- **Footer** - Professional footer with links

## Files Included

- `index.html` - Main HTML structure with i18n attributes
- `styles.css` - All styling with OLA brand colors
- `translations.js` - Language switching logic and translations for EN/ID
- `images/` - Folder containing hero images from your main site
- `video/` - Folder containing OLA work system demonstration video (ola.mp4)
- `README.md` - This file

## How to Use

### Option 1: Open Locally
1. Simply open `index.html` in any web browser
2. All styles, images, and video are linked relatively, so it works offline
3. The video will autoplay (muted) when you scroll to the "How OLA Works" section

### Option 2: Deploy to a Web Server
1. Upload all files and folders to your web server
2. Make sure the folder structure is maintained:
   ```
   advertising-landing-page/
   ├── index.html
   ├── styles.css
   ├── translations.js
   ├── images/
   │   ├── hero-home-1.jpg
   │   └── hero-home-2.jpg
   ├── video/
   │   └── ola.mp4
   └── README.md
   ```
3. Access via your domain/subdomain

### Option 3: Use GitHub Pages (Free Hosting)
1. Create a new GitHub repository
2. Upload these files
3. Enable GitHub Pages in repository settings
4. Your page will be live at `https://yourusername.github.io/repository-name`

## Customization

### Update Links
The landing page currently has placeholder `#` links. Update these in `index.html`:
- "Get Started" button (line 23)
- "Contact Us" button (line 24)
- "Get Started Now" button (line 139)
- "Learn More" button (line 140)
- Footer links (lines 155-167)

### Change Content
All content can be edited directly in `index.html`. The structure is clearly commented.

### Modify Colors
Brand colors are defined at the top of `styles.css` in the `:root` section:
```css
--primary-orange: hsl(32, 89%, 55%);
--primary-orange-light: hsl(28, 94%, 71%);
--primary-orange-dark: hsl(30, 95%, 25%);
```

### Add More Images
Place additional images in the `images/` folder and reference them in the HTML.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Language Support

The landing page supports two languages:

### **English (EN)** and **Bahasa Indonesia (ID)**

**How it works:**
- **Language Toggle**: Click the "EN | ID" button in the navigation to switch languages
- **Auto-save Preference**: Your language choice is saved in browser localStorage
- **Dynamic Translation**: All content updates instantly when switching languages
- **WhatsApp Messages**: Pre-filled WhatsApp messages change based on selected language
  - English: "Hi OLA, I'm interested in your import services"
  - Indonesian: "Halo OLA, saya tertarik dengan layanan impor Anda"

### Adding/Editing Translations

To modify translations, edit the `translations.js` file. The structure is:

```javascript
const translations = {
    en: { /* English translations */ },
    id: { /* Indonesian translations */ }
};
```

## Navigation Features

The header includes:
- **Auto-scroll on click**: Clicking any navigation link smoothly scrolls to that section
- **Scroll detection**: Header background appears when you scroll down
- **Active section indicator**: Navigation highlights the current section as you scroll
- **Mobile hamburger menu**: On tablets and mobile devices, navigation becomes a slide-out menu
- **Language switcher**: Toggle between English and Bahasa Indonesia

## Performance

- Lightweight: Minimal JavaScript for navigation and i18n only
- Fast loading: Optimized HTML/CSS
- SEO-friendly: Semantic HTML structure with proper lang attributes
- Mobile-optimized: Responsive design with touch-friendly navigation
- LocalStorage: Language preference cached for faster subsequent visits

## Notes

- The page uses Google Fonts (Raleway and Poppins) which require an internet connection
- Hero background image uses `background-attachment: fixed` for a parallax effect (disabled on mobile for performance)
- All transitions and animations respect `prefers-reduced-motion` for accessibility

## Support

For any questions or modifications, refer to the main OLA project or contact your development team.

---

**Created for OLA Personal Importer - 2025**
