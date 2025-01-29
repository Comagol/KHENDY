// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-vjFWYyrzaZkOOufPywZytKeK2sLG_I4",
  authDomain: "khendy-de740.firebaseapp.com",
  projectId: "khendy-de740",
  storageBucket: "khendy-de740.firebasestorage.app",
  messagingSenderId: "302952719507",
  appId: "1:302952719507:web:b07f6bbfa60fe46d559966",
  measurementId: "G-9N7XNRQ05F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);