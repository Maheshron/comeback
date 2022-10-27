
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCesaWg60jLUi46eassIn_0Gu-6baxbW5Q",
  authDomain: "chat-44b61.firebaseapp.com",
  projectId: "chat-44b61",
  storageBucket: "chat-44b61.appspot.com",
  messagingSenderId: "326754608106",
  appId: "1:326754608106:web:1a994282ffafdda8274893"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore();