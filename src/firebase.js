import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyLjVNvoLrEBYbR2qd4IYyntAdTwY5SmY",
  authDomain: "chat-app-d9ad2.firebaseapp.com",
  projectId: "chat-app-d9ad2",
  storageBucket: "chat-app-d9ad2.appspot.com",
  messagingSenderId: "528672046472",
  appId: "1:528672046472:web:940c140862238fbc028e3d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
