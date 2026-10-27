
const productGrid = document.getElementById('productGrid');
const statusMessage = document.getElementById('statusMessage');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

let allProducts = []; 

async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Gagal mengambil data dari server');
        
        const data = await response.json();
        allProducts = data.products; 
        
        populateCategories(allProducts); 
        displayProducts(allProducts);    

        statusMessage.style.display = 'none'; 
    } catch (error) {
        statusMessage.textContent = 'Terjadi kesalahan: ' + error.message;
        statusMessage.classList.add('error');
    }
}

function displayProducts(productsToDisplay) {
    productGrid.innerHTML = ''; 

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p class="message">Produk tidak ditemukan.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const badgeHTML = product.stock < 10 ? `<span class="badge">Stok Menipis</span>` : '';

        card.innerHTML = `
            ${badgeHTML}
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="category">${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
        productGrid.appendChild(card);
    });
}

function populateCategories(products) {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = allProducts.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

fetchProducts();