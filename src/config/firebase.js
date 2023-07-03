
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAchxwc6QPNoe1Cm2ab_am5N75ymwwwroM",
  authDomain: "expense-tracker-30a3b.firebaseapp.com",
  projectId: "expense-tracker-30a3b",
  storageBucket: "expense-tracker-30a3b.appspot.com",
  messagingSenderId: "89062325183",
  appId: "1:89062325183:web:2d319d96770c6d4f043f0a",
  measurementId: "G-JY2C91NH78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db}