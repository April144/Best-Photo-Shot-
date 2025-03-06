# Best-Photo-Shot-
E-Commerce Website

Below is a well-structured `README.md` file for your "Best Photo Shot" project. It includes an overview, setup instructions, features, file structure, and other relevant details. This README assumes the project uses the updated files I provided (HTML, SCSS/CSS, JavaScript) with cart persistence, search functionality, and accessibility improvements.

---

# Best Photo Shot - E-Commerce Website

![Best Photo Shot Logo](img/camera-logo-24.png)

**Best Photo Shot** is a responsive e-commerce website designed for photography enthusiasts to browse and purchase cameras, lenses, and accessories. Built with HTML, SCSS, and JavaScript, this project showcases a clean, modern design with a functional shopping cart and basic search capabilities.

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Features
- **Responsive Design**: Adapts seamlessly from desktop to mobile devices (down to 350px).
- **Product Listings**: Displays products on the homepage ("Trending Now") and a dedicated products page.
- **Shopping Cart**: Add, remove, and adjust quantities of items with persistence using `localStorage`.
- **Search Functionality**: Filter products by name using the search bar.
- **Navigation**: Sticky navbar with a hamburger menu for mobile users.
- **Accessibility**: Includes ARIA labels for interactive elements and `alt` text for images.
- **Hero Sections**: Eye-catching banners for news and promotions (e.g., Black Friday).
- **Category Icons**: Visual representation of popular photography categories.

---

## Demo
You can test the website locally by following the [Installation](#installation) instructions. A live demo is not hosted yet, but you can:
- Open `index.html` to see the homepage with trending products and hero banners.
- Navigate to `products.html` to view all products.
- Visit `shopping-cart.html` to manage your cart.

---

## Installation
1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/yourusername/best-photo-shot.git
   ```
   Or download the ZIP file and extract it.

2. **Navigate to the Project Directory**:
   ```bash
   cd best-photo-shot
   ```

3. **Compile SCSS to CSS** (if modifying SCSS):
   - Install a Sass compiler (e.g., via npm):
     ```bash
     npm install -g sass
     ```
   - Compile `styles.scss` to `styles.css`:
     ```bash
     sass css/styles.scss css/styles.css
     ```
   - Note: If you’re using the provided `styles.css`, this step is optional.

4. **Open the Website**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox) directly, or use a local server for better testing:
     ```bash
     npx http-server
     ```
     Then visit `http://localhost:8080`.

---

## Usage
- **Homepage (`index.html`)**:
  - Browse trending products under "Trending Now".
  - Use the search bar to filter products by name.
  - Click "Add to cart" to add items to your shopping cart.
  - Navigate using the top menu or mobile hamburger menu.

- **Products Page (`products.html`)**:
  - View all available products.
  - Add items to the cart.

- **Shopping Cart (`shopping-cart.html`)**:
  - Adjust quantities with plus/minus buttons.
  - Remove items with the "X" button.
  - See the updated subtotal and total.
  - Click "Continue Shopping" to return to the homepage.

- **Cart Persistence**: Items remain in the cart across page refreshes and navigation thanks to `localStorage`.

---

## File Structure
```
best-photo-shot/
├── css/
│   ├── styles.css          # Compiled CSS file
│   └── styles.scss         # SCSS source with variables and styles
├── img/
│   ├── camera-logo-16.png  # Favicon
│   ├── camera-logo-24.png  # Logo in navbar
│   ├── hero_image.jpg      # Homepage hero image
│   ├── black-friday-concept-with-alarm-cart-space-2.jpg  # Black Friday banner
│   ├── nayris-aquino-Lidm0GHUL-0-unsplash.jpg  # Nikon D3200 image
│   ├── mikedelta-zUnc4-eHw6E-unsplash.jpg     # Pentax MZ-50 image
│   ├── rohit-jawalkar-bZvX1kozeRg-unsplash.jpg # Canon EOS image
│   ├── drone_96.png        # Category icon
│   ├── camera_96.png       # Category icon
│   ├── camera_lens_96.png  # Category icon
│   ├── flash_light_96.png  # Category icon
│   ├── sling_bag_96.png    # Category icon
│   ├── PayPal_logo.png     # Payment button image
│   └── Klarna_logo_2.png   # Payment button image
├── js/
│   └── main.js             # JavaScript for dynamic functionality
├── index.html              # Homepage
├── products.html           # Products listing page
├── shopping-cart.html      # Shopping cart page
└── README.md               # Project documentation
```

---

## Technologies Used
- **HTML5**: Structure and content.
- **SCSS/CSS3**: Styling with variables and responsive design.
- **JavaScript (ES6)**: Dynamic features like cart management and search.
- **Font Awesome**: Icons for navigation, cart, and social media.
- **Google Fonts**: `Varela Round` and `Roboto` for typography.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes comments where necessary.

---

## License
This project is licensed under the MIT License. 
---

## Author
- Thin Zar Nwe

---

### Notes for Improvement
- **Backend Integration**: Add a server to fetch products dynamically and process payments.
- **Checkout Functionality**: Implement a real checkout flow with payment gateways.
- **Image Optimization**: Compress images for faster loading.
- **Testing**: Add unit tests for JavaScript functions using a framework like Jest.
