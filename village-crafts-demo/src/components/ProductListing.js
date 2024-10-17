// src/components/ProductListing.js

import React from 'react';
import LazyImage from './LazyImage';

const ProductListing = ({ product }) => (
  <div className="product-listing">
    {/* Lazy loading the product image */}
    <LazyImage src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <span>Price: ${product.price}</span>
  </div>
);

export default ProductListing;
