// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSHd2Rha5tV9VAxaFrR_jxuARcDneAyQ",
  authDomain: "react-auth-tutorial-774df.firebaseapp.com",
  projectId: "react-auth-tutorial-774df",
  storageBucket: "react-auth-tutorial-774df.appspot.com",
  messagingSenderId: "44208788362",
  appId: "1:44208788362:web:4c2e37fd11a8eb9fcdee73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
