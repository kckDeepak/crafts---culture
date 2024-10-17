// firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtV-Wh4wF09ahJvFOYwIgJW48ekJZGXw",
  authDomain: "crafts---culture.firebaseapp.com",
  projectId: "crafts---culture",
  storageBucket: "crafts---culture.appspot.com",
  messagingSenderId: "146393546062",
  appId: "1:146393546062:web:9a6c30755a5cb00803b21f",
  measurementId: "G-LM17CCBNTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);       // For Authentication
export const db = getFirestore(app);    // For Firestore (Database)
