// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "fir-frontend-deddd.firebaseapp.com",
  projectId: "fir-frontend-deddd",
  storageBucket: "fir-frontend-deddd.appspot.com",
  messagingSenderId: "929034081898",
  appId: "1:929034081898:web:8d58f9b55dd2ab7201dc13",
  measurementId: "G-GWVHMNEK07",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
