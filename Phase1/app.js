const products = [
    { name: 'T-shirt', category: 'Clothing', price: 80 },
    { name: 'Crime and Punishment', category: 'Books', price: 30 },
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Anna Karenina', category: 'Books', price: 50 },
    { name: 'Jacket', category: 'Clothing', price: 120 },
    { name: 'Smartphone', category: 'Electronics', price: 1000 },
];

const categories = ['All', ...new Set(products.map(product => product.category))];

//generate filter buttons
const filterSection = document.querySelector('.filter-section');
categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;  
    button.classList.add('filter-btn');
    button.id = category; 
    button.addEventListener('click', () => displayProducts(category));  
    filterSection.appendChild(button);  
});

//Function to create product HTML
function createProductHTML(product) {
    return `
        <div class="product-item ${product.category}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        </div>
    `;
}

//Function to render products based on the selected category
function displayProducts(category) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = '';  

    const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        productDisplay.innerHTML += createProductHTML(product);
    });
}

//Initial display of all products when the page loads
displayProducts('All');
