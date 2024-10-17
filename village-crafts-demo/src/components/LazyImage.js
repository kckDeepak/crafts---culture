// src/components/LazyImage.js

const LazyImage = ({ src, alt }) => {
    return <img loading="lazy" src={src} alt={alt} />;
  };
  
  export default LazyImage;
  