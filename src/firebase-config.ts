import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhViwPLEGMsuifiTHTY-8ojfCmHgG95Eg",
  authDomain: "moviesite-57081.firebaseapp.com",
  projectId: "moviesite-57081",
  storageBucket: "moviesite-57081.appspot.com",
  messagingSenderId: "165526036834",
  appId: "1:165526036834:web:003ae642f2de2755240c3b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);

