// Replace with your Firebase config from the Firebase Console
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCrwgWkI4sLqvQ-Fv-9hxGHa3DTXGGzb5U",
    authDomain: "zunofashions-7e3d9.firebaseapp.com",
    projectId: "zunofashions-7e3d9",
    storageBucket: "zunofashions-7e3d9.firebasestorage.app",
    messagingSenderId: "809796379625",
    appId: "1:809796379625:web:b59f18d486545dd2302178",
    measurementId: "G-DDG64ZJZ2N"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
