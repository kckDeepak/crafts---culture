// src/components/ArtisanProfile.js

import React from 'react';
import ProductListing from './ProductListing';
import LazyImage from './LazyImage';

const ArtisanProfile = ({ artisan }) => (
  <div className="artisan-profile">
    <h2>{artisan.name}</h2>
    <p>{artisan.story}</p>
    {/* Lazy loading the artisan profile image */}
    <LazyImage src={artisan.image} alt={artisan.name} />
    <h3>Products</h3>
    <div>
      {artisan.products.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ArtisanProfile;
