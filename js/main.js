// Product data
const products = [
  { imgSrc: "img/nayris-aquino-Lidm0GHUL-0-unsplash.jpg", name: "Nikon D3200", price: 599 },
  { imgSrc: "img/mikedelta-zUnc4-eHw6E-unsplash.jpg", name: "Pentax MZ-50", price: 299 },
  { imgSrc: "img/rohit-jawalkar-bZvX1kozeRg-unsplash.jpg", name: "Canon EOS", price: 699 },
];

// Cart state (load from localStorage or initialize empty)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM elements
const prodContProd = document.querySelector("#products");
const prodContIndex = document.querySelector("#prod-index");
const prodContCart = document.querySelector("#prod-cart");
const cartIcon = document.querySelector("#cart-icon");
const searchInput = document.querySelector("#search-input");

// Display products on products.html
const displayProducts = () => {
  if (prodContProd) {
    products.forEach((product) => {
      createProd(product.imgSrc, product.name, product.price, "prod");
    });
  }
};

// Display 3 products on index.html
const displayProdIndex = () => {
  if (prodContIndex) {
    products.slice(0, 3).forEach((product) => {
      createProd(product.imgSrc, product.name, product.price, "index");
    });
  }
};

// Display cart items
const displayProdCart = () => {
  if (prodContCart) {
    prodContCart.innerHTML = ""; // Clear existing items
    cart.forEach((product, index) => {
      createCartProd(product.imgSrc, product.name, product.price, index);
    });
    updateCartSummary();
  }
};

// Create product element
const createProd = (imgSrc, name, price, check) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let buttonProd = document.createElement("button");
  let divOverlay = document.createElement("div");
  let prodDesc = document.createElement("p");
  let buttonMore = document.createElement("button");

  imgProd.src = imgSrc;
  imgProd.alt = name;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  buttonProd.innerText = "Add to cart";
  buttonProd.setAttribute("aria-label", `Add ${name} to cart`);
  prodDesc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  buttonMore.innerText = "More info";

  priceProd.className = "price";
  buttonProd.className = "atc-btn";
  buttonMore.className = "rm-btn";
  divOverlay.className = "overlay";
  prodDesc.className = "description";
  divProd.className = "img-products";

  buttonProd.addEventListener("click", () => {
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ imgSrc, name, price, quantity: 1 });
    }
    saveCart();
    updateCartIcon();
    if (prodContCart) displayProdCart(); // Refresh cart if on cart page
  });

  divOverlay.appendChild(prodDesc);
  divOverlay.appendChild(buttonMore);
  divOverlay.appendChild(buttonProd);
  divProd.appendChild(imgProd);
  divProd.appendChild(nameProd);
  divProd.appendChild(priceProd);
  divProd.appendChild(divOverlay);

  if (check === "prod" && prodContProd) {
    prodContProd.appendChild(divProd);
  } else if (check === "index" && prodContIndex) {
    prodContIndex.appendChild(divProd);
  }
};

// Create cart product element
const createCartProd = (imgSrc, name, price, index) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let descProd = document.createElement("div");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let amountDiv = document.createElement("div");
  let plusIcon = document.createElement("i");
  let minusIcon = document.createElement("i");
  let amount = document.createElement("p");
  let icons = document.createElement("div");
  let closeIcon = document.createElement("i");

  imgProd.src = imgSrc;
  imgProd.alt = name;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  amount.innerText = cart[index].quantity;

  divProd.className = "cart-prod";
  descProd.className = "desc-prod";
  amountDiv.className = "amount-div";
  plusIcon.className = "fa-regular fa-square-plus";
  plusIcon.setAttribute("aria-label", "Increase quantity of " + name);
  minusIcon.className = "fa-regular fa-square-minus";
  minusIcon.setAttribute("aria-label", "Decrease quantity of " + name);
  icons.className = "cart-icons";
  closeIcon.className = "fa-regular fa-rectangle-xmark";
  closeIcon.setAttribute("aria-label", "Remove " + name + " from cart");

  plusIcon.addEventListener("click", () => {
    cart[index].quantity++;
    amount.innerText = cart[index].quantity;
    saveCart();
    updateCartSummary();
    updateCartIcon();
  });

  minusIcon.addEventListener("click", () => {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      amount.innerText = cart[index].quantity;
    } else {
      cart.splice(index, 1);
      divProd.remove();
    }
    saveCart();
    updateCartSummary();
    updateCartIcon();
  });

  closeIcon.addEventListener("click", () => {
    cart.splice(index, 1);
    divProd.remove();
    saveCart();
    updateCartSummary();
    updateCartIcon();
  });

  divProd.appendChild(imgProd);
  descProd.appendChild(nameProd);
  descProd.appendChild(priceProd);
  amountDiv.appendChild(minusIcon);
  amountDiv.appendChild(amount);
  amountDiv.appendChild(plusIcon);
  descProd.appendChild(amountDiv);
  divProd.appendChild(descProd);
  icons.appendChild(closeIcon);
  divProd.appendChild(icons);
  prodContCart.appendChild(divProd);
};

// Save cart to localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Update cart icon
const updateCartIcon = () => {
  if (cartIcon) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.setAttribute("value", totalItems);
  }
};

// Update cart summary
const updateCartSummary = () => {
  const subtotalEl = document.querySelector("#subtotal");
  const totalEl = document.querySelector("#total");
  if (subtotalEl && totalEl) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    subtotalEl.innerText = "$" + subtotal;
    totalEl.innerText = "$" + subtotal; // Add delivery or discounts if needed
  }
};

// Search functionality
const setupSearch = () => {
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const productContainers = document.querySelectorAll(".img-products");
      productContainers.forEach((prod) => {
        const name = prod.querySelector("h4").innerText.toLowerCase();
        prod.style.display = name.includes(query) ? "block" : "none";
      });
    });
  }
};

// Hamburger menu toggle
const hamburgerMenu = () => {
  const x = document.getElementById("myLinks");
  x.style.display = x.style.display === "block" ? "none" : "block";
};

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  displayProdIndex();
  displayProdCart();
  updateCartIcon();
  setupSearch();
});