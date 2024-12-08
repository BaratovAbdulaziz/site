export const languages = {
    en: {
        nav: {
            home: 'Home',
            products: 'Products',
            about: 'About'
        },
        filters: {
            search: 'Search products...',
            categories: {
                all: 'All',
                clothing: 'Clothing',
                accessories: 'Accessories',
                footwear: 'Footwear'
            },
            sort: {
                featured: 'Featured',
                priceLowHigh: 'Price: Low to High',
                priceHighLow: 'Price: High to Low',
                nameAZ: 'Name: A-Z'
            }
        },
        cart: {
            title: 'Your Cart',
            checkout: 'Proceed to Checkout',
            empty: 'Your cart is empty'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            products: 'Productos',
            about: 'Sobre Nosotros'
        },
        filters: {
            search: 'Buscar productos...',
            categories: {
                all: 'Todos',
                clothing: 'Ropa',
                accessories: 'Accesorios',
                footwear: 'Calzado'
            },
            sort: {
                featured: 'Destacados',
                priceLowHigh: 'Precio: Menor a Mayor',
                priceHighLow: 'Precio: Mayor a Menor',
                nameAZ: 'Nombre: A-Z'
            }
        },
        cart: {
            title: 'Tu Carrito',
            checkout: 'Proceder al Pago',
            empty: 'Tu carrito está vacío'
        }
    }
};

let currentLanguage = 'en';

export function initializeLanguages() {
    const languageSelector = document.createElement('div');
    languageSelector.className = 'language-selector';
    languageSelector.innerHTML = `
        <select id="languageSelect">
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    `;
    
    document.querySelector('nav').appendChild(languageSelector);
    
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

export function setLanguage(lang) {
    currentLanguage = lang;
    updatePageText();
}

function updatePageText() {
    const texts = languages[currentLanguage];
    
    // Update navigation
    document.querySelector('a[href="#"]').textContent = texts.nav.home;
    document.querySelector('a[href="#products"]').textContent = texts.nav.products;
    document.querySelector('a[href="#about"]').textContent = texts.nav.about;
    
    // Update filters
    if (document.getElementById('searchInput')) {
        document.getElementById('searchInput').placeholder = texts.filters.search;
    }
    
    // Update cart
    const cartTitle = document.querySelector('.modal-content h2');
    if (cartTitle) {
        cartTitle.textContent = texts.cart.title;
    }
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.textContent = texts.cart.checkout;
    }
}