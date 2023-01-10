// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA1MQDOCcFdGzxzfRudnW2Ms6gdBvDigdY",
  authDomain: "unichat-517e6.firebaseapp.com",
  projectId: "unichat-517e6",
  storageBucket: "unichat-517e6.appspot.com",
  messagingSenderId: "537401325309",
  appId: "1:537401325309:web:8cf3ea661feb15c049f094",
  measurementId: "G-FHVN3CRL8X"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
