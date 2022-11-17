// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ngORn7wu74e35-YsYBkC_BaSd5b-Z1s",
  authDomain: "pizzastore-32939.firebaseapp.com",
  projectId: "pizzastore-32939",
  storageBucket: "pizzastore-32939.appspot.com",
  messagingSenderId: "61570136420",
  appId: "1:61570136420:web:ab7403e70c90c711662271",
  measurementId: "G-ZPJCW6QX4C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore();
