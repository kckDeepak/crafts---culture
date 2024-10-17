// src/App.js

import React, { lazy, Suspense } from 'react';

// Lazy load ArtisanList component
const ArtisanList = lazy(() => import('./components/ArtisanList'));
const SignUp = lazy(() => import('./components/SignUp'));
const SignIn = lazy(() => import('./components/SignIn'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
        <SignIn />
        <ArtisanList />
      </Suspense>
    </div>
  );
}

export default App;
