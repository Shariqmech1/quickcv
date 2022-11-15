import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTIexL3vGW3FHfv1XjuY7bnkajyRFLAG4",
  authDomain: "quick-cv-921df.firebaseapp.com",
  projectId: "quick-cv-921df",
  storageBucket: "quick-cv-921df.appspot.com",
  messagingSenderId: "84689191129",
  appId: "1:84689191129:web:64167e2efdf559d9a47ec8",
  measurementId: "G-WDW1LW270B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };