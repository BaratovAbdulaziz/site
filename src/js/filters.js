// Available filters configuration
export const filters = {
    categories: ['All', 'Clothing', 'Accessories', 'Footwear'],
    priceRanges: [
        { label: 'All Prices', min: 0, max: Infinity },
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: 'Over $100', min: 100, max: Infinity }
    ],
    sortOptions: ['Featured', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z']
};

export function initializeFilters() {
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'filters-container';
    filtersContainer.innerHTML = createFiltersHTML();
    
    const productsSection = document.getElementById('products');
    productsSection.insertAdjacentElement('beforebegin', filtersContainer);
    
    // Add event listeners
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
    document.getElementById('sortFilter').addEventListener('change', applyFilters);
    document.getElementById('searchInput').addEventListener('input', applyFilters);
}

function createFiltersHTML() {
    return `
        <div class="filters-wrapper">
            <div class="search-box">
                <input type="text" id="searchInput" placeholder="Search products...">
            </div>
            <div class="filter-group">
                <select id="categoryFilter">
                    ${filters.categories.map(category => 
                        `<option value="${category.toLowerCase()}">${category}</option>`
                    ).join('')}
                </select>
                <select id="priceFilter">
                    ${filters.priceRanges.map(range => 
                        `<option value="${range.min}-${range.max}">${range.label}</option>`
                    ).join('')}
                </select>
                <select id="sortFilter">
                    ${filters.sortOptions.map(option => 
                        `<option value="${option.toLowerCase()}">${option}</option>`
                    ).join('')}
                </select>
            </div>
        </div>
    `;
}

export function applyFilters() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const [minPrice, maxPrice] = document.getElementById('priceFilter').value.split('-').map(Number);
    const sortOption = document.getElementById('sortFilter').value;
    
    const filteredProducts = filterProducts(searchQuery, category, minPrice, maxPrice);
    const sortedProducts = sortProducts(filteredProducts, sortOption);
    
    updateProductsDisplay(sortedProducts);
}

function filterProducts(searchQuery, category, minPrice, maxPrice) {
    return window.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        const matchesCategory = category === 'all' || product.category === category;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
}

function sortProducts(products, sortOption) {
    const sortedProducts = [...products];
    
    switch(sortOption) {
        case 'price: low to high':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price: high to low':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'name: a-z':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sortedProducts;
    }
}

function updateProductsDisplay(products) {
    const productsGrid = document.getElementById('products');
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="no-results">No products found</div>';
        return;
    }
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsGrid.appendChild(productElement);
    });
}