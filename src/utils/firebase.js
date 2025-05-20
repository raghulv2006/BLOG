// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogs-cc65e.firebaseapp.com",
  projectId: "blogs-cc65e",
  storageBucket: "blogs-cc65e.firebasestorage.app",
  messagingSenderId: "496749984062",
  appId: "1:496749984062:web:19cc3f50725a4ae621d46f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);