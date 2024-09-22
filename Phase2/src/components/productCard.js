import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductCard;
