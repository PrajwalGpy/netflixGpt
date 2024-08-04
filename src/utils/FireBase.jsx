// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_URL_FIREBASE_API_KEY,

  authDomain: "netflixgpt-82e52.firebaseapp.com",
  projectId: "netflixgpt-82e52",
  storageBucket: "netflixgpt-82e52.appspot.com",
  messagingSenderId: "65904657025",
  appId: "1:65904657025:web:c09f0d39c37745f16b8380",
  measurementId: "G-XB4B0SZG89",
};
console.log(firebaseConfig.apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
