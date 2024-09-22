import React from 'react';
import ProductCard from './productCard';  

function ProductList({ products, categories, onCategoryChange }) {  

    return (
        <div>
            <div className="filter-section">
                {categories.map((category, index) => (
                    <button className="filter-btn" key={index} onClick={() => onCategoryChange(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="product-display">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
