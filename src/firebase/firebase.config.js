// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9C1OkrsQ8UrN7excTAvbzuHUCJpQKtrY",
  authDomain: "book-store-b5284.firebaseapp.com",
  projectId: "book-store-b5284",
  storageBucket: "book-store-b5284.appspot.com",
  messagingSenderId: "450597267151",
  appId: "1:450597267151:web:c99bffeb5a9e39b5f9f9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;