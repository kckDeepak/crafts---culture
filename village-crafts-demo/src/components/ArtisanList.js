// components/ArtisanList.js

import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ArtisanList = () => {
  const [artisans, setArtisans] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state to handle initial render

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const artisanCollection = collection(db, 'artisans');
        const artisanSnapshot = await getDocs(artisanCollection);
        const artisanList = artisanSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setArtisans(artisanList);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching artisans:', error);
        setLoading(false); // Set loading to false even if there’s an error
      }
    };

    fetchArtisans();
  }, []);

  // If data is still being fetched, show a loading message
  if (loading) {
    return <div>Loading artisans...</div>;
  }

  // If the artisans array is still empty after loading, show a message
  if (artisans.length === 0) {
    return <div>No artisans found</div>;
  }

  return (
    <div>
      <h2>Our Artisans</h2>
      <ul>
        {artisans.map((artisan) => (
          <li key={artisan.id}>
            <h3>{artisan.name}</h3>
            <p>{artisan.story}</p>
            <img src={artisan.image} alt={artisan.name} />
            <h4>Products:</h4>
            <ul>
              {artisan.products && artisan.products.length > 0 ? (
                artisan.products.map((product, index) => (
                  <li key={index}>
                    <p>{product.name} - ${product.price}</p>
                    <img src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                  </li>
                ))
              ) : (
                <li>No products available</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtisanList;
