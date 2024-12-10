// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL1aRbr1qWWREFkKmQH4oh-Ep4lzMzeOQ",
    authDomain: "portfolio-5f1f0.firebaseapp.com",
    projectId: "portfolio-5f1f0",
    storageBucket: "portfolio-5f1f0.firebasestorage.app",
    messagingSenderId: "272896573837",
    appId: "1:272896573837:web:d4bed565e85dddc0f63dc4",
    measurementId: "G-3H1QH6BQ5L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);