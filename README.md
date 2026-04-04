# Kuberan Foodz Website

Kuberan Foodz is a responsive food-ordering website built for a homemade tiffen brand in Madurai. The site highlights the menu, customer trust points, business details, and a simple cart flow that sends orders directly to WhatsApp.

Live site:
`https://dineshmoorty.github.io/Kuberan_Foodz/index.html`

## Project Highlights

- Responsive homepage with fixed navbar, animated sections, and floating cart button
- Filterable menu categories for `All Dishes`, `Tiffen`, `Rice`, and `Biriyani`
- Dedicated dishes page for customer ordering
- Cart page with quantity update, subtotal, total, and customer details form
- WhatsApp order flow with Tamil order message
- Shared footer across pages with contact, map, Zomato, FSSAI, and MSME details
- Basic PWA support with manifest, service worker, and install button
- Local SEO content targeting Madurai, South Gate, Mahal, Madurai Main, and Saurashtra food searches

## Pages

- `index.html`
  Main landing page with hero section, menu preview, why choose us, about, contact, and footer.
- `pages/dishes.html`
  Customer-facing dish listing with dummy prices and add-to-cart actions.
- `pages/cart.html`
  Cart summary page with customer name, mobile number, address, and WhatsApp checkout.

## Tech Stack

- HTML5
- Tailwind CSS via CDN
- Custom CSS in `assets/css/styles.css`
- Vanilla JavaScript
- LocalStorage for cart persistence
- GitHub Pages for deployment

## Project Structure

```text
Kuberan_Foodz/
|-- index.html
|-- manifest.webmanifest
|-- sw.js
|-- README.md
|-- assets/
|   |-- css/styles.css
|   |-- dishes/
|   |-- images/
|-- pages/
|   |-- dishes.html
|   |-- cart.html
|-- scripts/
|   |-- navbar.js
|   |-- menu-filter.js
|   |-- cart.js
|   |-- dishes-page.js
|   |-- cart-page.js
|   |-- pwa.js
```

## Main Features

### Menu Browsing

Customers can explore dishes by category on the homepage and view all orderable dishes on the dedicated dishes page.

### Cart System

The site uses `localStorage` to:

- add dishes to cart
- update quantity
- remove items
- keep cart data between pages

### WhatsApp Orders

Orders are sent directly through WhatsApp with:

- customer name
- mobile number
- address
- selected items
- quantities
- total amount

After the order button is clicked, the cart is cleared.

### PWA Support

The site includes:

- `manifest.webmanifest`
- `sw.js`
- `scripts/pwa.js`
- install button in the header

For the install prompt to work properly, the site should be opened on `https` or `localhost`.

## Business Details

- Brand: `Kuberan Foodz`
- Phone: `+91 94882 70932`
- Email: `storeskuberan@gmail.com`
- WhatsApp: `https://wa.me/919488270932`
- Zomato: `https://www.zomato.com/madurai/shri-kuberan-tiffen-home-periyar`
- Location: `SHRI KUBERAN TIFFEN HOME, Madurai`
- Google Maps: `https://www.google.com/maps/place/SHRI+KUBERAN+TIFFEN+HOME/data=!4m2!3m1!1s0x0:0x9ef6e6fab2e9657b?sa=X&ved=1t:2428&hl=en&ictx=111`
- FSSAI No: `22422577000137`
- MSME No: `UDYAM-TN-12-0051633`

## Local Development

Because this project uses a service worker, it is better to run it through a local server instead of opening the HTML files directly.

Example with VS Code Live Server:

1. Open the project folder in VS Code.
2. Start `Live Server` on `index.html`.
3. Open the local URL in your browser.

If you open the files with `file://`, the PWA install feature will not work correctly.

## Deployment

This project is deployed with GitHub Pages.

To update the live site:

1. Commit your latest changes.
2. Push them to the GitHub repository.
3. Wait a short time for GitHub Pages to publish the update.
4. Hard refresh the browser if cached files are still showing.

## Customization Notes

- Dummy dish prices can be updated in `scripts/cart.js`
- Menu card content can be edited in `index.html`
- Dishes page rendering is controlled by `scripts/dishes-page.js`
- Cart behavior and WhatsApp message formatting are handled in `scripts/cart.js` and `scripts/cart-page.js`
- Shared styling lives in `assets/css/styles.css`

## Credits

Website developed by:
`Dineshmoorthi`

Portfolio:
`https://dineshmoorty.github.io/Portfolio/`
