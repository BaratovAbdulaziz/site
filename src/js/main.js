import { products } from './products.js';
import { initializeCart } from './cart.js';
import { initializeCheckout } from './checkout.js';
import { initializeAbout } from './about.js';
import { initializeAnimations } from './animations.js';
import { initializeFilters } from './filters.js';
import { initializeMenu } from './menu.js';
import { initializeTheme } from './themes.js';

// Make products globally available for filters
window.products = products;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeMenu();
    initializeFilters();
    displayProducts();
    initializeCart();
    initializeCheckout();
    initializeAbout();
    initializeAnimations();

    // Check for saved animation preference
    if (localStorage.getItem('disableAnimations')) {
        document.body.classList.add('disable-animations');
    }
});

// Display products in the grid
function displayProducts() {
    const productsGrid = document.getElementById('products');
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsGrid.appendChild(productElement);
    });
}

// Create product card element
function createProductElement(product) {
    const div = document.createElement('div');
    div.className = 'product-card fade-in';
    
    div.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    return div;
}