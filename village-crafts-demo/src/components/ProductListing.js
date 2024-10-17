// components/ProductListing.js

import LazyImage from './LazyImage';

const ProductListing = ({ product }) => (
  <div className="product-listing">
    <LazyImage src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <span>Price: ${product.price}</span>
  </div>
);

export default ProductListing;
