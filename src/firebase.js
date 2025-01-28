// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApVWxUCDuj2W_tMZiLIFZleuVrKs_zwJ8",
  authDomain: "reactclasses-e374a.firebaseapp.com",
  projectId: "reactclasses-e374a",
  storageBucket: "reactclasses-e374a.firebasestorage.app",
  messagingSenderId: "985896071336",
  appId: "1:985896071336:web:435be9fb38d65d9eda129d",
  measurementId: "G-QEWF1CZJSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };