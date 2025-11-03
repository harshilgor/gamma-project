# Static HTML Website

This folder contains the complete static HTML version of the GAMA International website.

## Files Structure

- `index.html` - Home page
- `about.html` - About Us page
- `contact.html` - Contact page
- `solutions/pos.html` - POS Solutions page
- `solutions/ecom.html` - E-commerce Solutions page
- `solutions/pay-by-link.html` - Pay-by-Link Solutions page

## How to View

### Option 1: Using a Simple HTTP Server

From the project root directory:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

Then open `http://localhost:8080/html/index.html` in your browser.

### Option 2: Direct File Access

You can open the HTML files directly in your browser, but some features (like image loading) may not work correctly due to browser security restrictions.

### Option 3: Copy Files to a Web Server

Copy the entire `html` folder and the `public` folder to your web server. Make sure the `public` folder is accessible at `/public/` from the HTML files.

## Image Paths

All images are referenced from `/public/` directory. Make sure:
- The `public` folder is accessible from the web root
- Or update image paths in the HTML files to match your server structure

## Features

✅ All pages converted from React to pure HTML
✅ Tailwind CSS via CDN (no build step required)
✅ Responsive navigation with mobile menu
✅ Scroll-based navigation effects
✅ All animations and styling preserved
✅ Contact form (form submission needs backend setup)
✅ Fully functional dropdown menus
✅ All content and styling matches the React version

