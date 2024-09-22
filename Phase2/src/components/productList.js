import React, { useState } from 'react';
import ProductCard from './productCard';  

const productsData = [
    { name: 'T-shirt', category: 'Clothing', price: 80 },
    { name: 'Crime and Punishment', category: 'Books', price: 30 },
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Anna Karenina', category: 'Books', price: 50 },
    { name: 'Jacket', category: 'Clothing', price: 120 },
    { name: 'Smartphone', category: 'Electronics', price: 1000 },
];

const categories = ['all', ...new Set(productsData.map(product => product.category))];

function ProductList() {  
    const [category, setCategory] = useState('all');

    const filteredProducts = category === 'all'
        ? productsData
        : productsData.filter(product => product.category === category);

    const handleFilterChange = (newCategory) => {
        setCategory(newCategory);  
    };

    return (
        <div>
            <div className="filter-section">
                {categories.map((category, index) => (
                    <button className="filter-btn" key={index} onClick={() => handleFilterChange(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="product-display">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
