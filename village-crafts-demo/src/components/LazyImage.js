// components/LazyImage.js

const LazyImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy" // Lazy loading image
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default LazyImage;
