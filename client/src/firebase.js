// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8edb4.firebaseapp.com",
  projectId: "mern-blog-8edb4",
  storageBucket: "mern-blog-8edb4.appspot.com",
  messagingSenderId: "806469361403",
  appId: "1:806469361403:web:41e8143fc9abf217ef9a5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
