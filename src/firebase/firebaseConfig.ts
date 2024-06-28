// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0fRF0Moi-6cCv2zux_E85GR0yREqIg7E",
  authDomain: "authentication-app-a4582.firebaseapp.com",
  projectId: "authentication-app-a4582",
  storageBucket: "authentication-app-a4582.appspot.com",
  messagingSenderId: "981090795815",
  appId: "1:981090795815:web:34a3c80d254c90acc06902",
  measurementId: "G-GYEFBJ6NHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);