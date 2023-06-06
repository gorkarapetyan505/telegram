// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBp24Vxk2tTKWVnFEoIQQYbBAsw1aE_y4",
  authDomain: "telegram-90eaf.firebaseapp.com",
  projectId: "telegram-90eaf",
  storageBucket: "telegram-90eaf.appspot.com",
  messagingSenderId: "1041961059200",
  appId: "1:1041961059200:web:5c52f397858f1945d43765",
  measurementId: "G-Q4QVTK3RRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)           
export const storage=getStorage(app)  