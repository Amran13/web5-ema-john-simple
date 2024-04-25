// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log('firebase')
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtieBQ2wl7RTpZ-e59d7RefLU1sXJGKjs",
  authDomain: "ema-john-authentication-9ed73.firebaseapp.com",
  projectId: "ema-john-authentication-9ed73",
  storageBucket: "ema-john-authentication-9ed73.appspot.com",
  messagingSenderId: "210276380048",
  appId: "1:210276380048:web:d65e4acd7b60bca87b5715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;