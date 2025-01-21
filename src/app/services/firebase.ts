/* eslint-disable @typescript-eslint/no-unused-vars */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYgukyExLKVQQbJ6XFroZ7_wQc9Y3PiLI",
  authDomain: "historia-das-musicas.firebaseapp.com",
  projectId: "historia-das-musicas",
  storageBucket: "historia-das-musicas.firebasestorage.app",
  messagingSenderId: "417998646466",
  appId: "1:417998646466:web:1cba685c018ca53fe59f5b",
  measurementId: "G-WRXTX2XS1W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
  const analytics = getAnalytics(app);
}

export { db };