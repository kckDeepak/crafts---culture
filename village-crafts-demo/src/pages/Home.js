// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import ArtisanProfile from '../components/ArtisanProfile';

const Home = () => {
  const [artisans, setArtisans] = useState([]);

  // Fetch artisan data from Firestore
  useEffect(() => {
    const fetchArtisans = async () => {
      const snapshot = await db.collection('artisans').get();
      const artisansData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArtisans(artisansData);
    };

    fetchArtisans();
  }, []);

  return (
    <div className="home-page">
      <h1>VillageCrafts</h1>
      {/* Render artisan profiles */}
      {artisans.map((artisan) => (
        <ArtisanProfile key={artisan.id} artisan={artisan} />
      ))}
    </div>
  );
};

export default Home;
