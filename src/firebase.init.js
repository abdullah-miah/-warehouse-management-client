// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0xOmLgkCOHhbrnTKXL8GnG-c5O9dlRjY",
  authDomain: "smart-hub-management.firebaseapp.com",
  projectId: "smart-hub-management",
  storageBucket: "smart-hub-management.appspot.com",
  messagingSenderId: "830550123632",
  appId: "1:830550123632:web:2758d3663889055b9340b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
