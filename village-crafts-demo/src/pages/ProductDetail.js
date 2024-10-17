// src/pages/ProductDetail.js

import React from 'react';
import LazyImage from '../components/LazyImage';

const ProductDetail = ({ product }) => (
  <div className="product-detail">
    <h2>{product.name}</h2>
    {/* Lazy loading the main product image */}
    <LazyImage src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <span>Price: ${product.price}</span>
  </div>
);

export default ProductDetail;
