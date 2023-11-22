// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "citizen-journal-95378.firebaseapp.com",
  projectId: "citizen-journal-95378",
  storageBucket: "citizen-journal-95378.appspot.com",
  messagingSenderId: "268115538188",
  appId: "1:268115538188:web:c408e8d4a12a93dd581929"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);