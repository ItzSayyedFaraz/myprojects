// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeZ35gKTx6J7pegp5o3TBPA88TGcektSQ",
  authDomain: "moviefied-809f3.firebaseapp.com",
  projectId: "moviefied-809f3",
  storageBucket: "moviefied-809f3.appspot.com",
  messagingSenderId: "1013132824750",
  appId: "1:1013132824750:web:3ff257ae606880dc729d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies")
export const reviewsRef=collection(db,"reviews")
export const usersRef=collection(db,"users");
export default app;