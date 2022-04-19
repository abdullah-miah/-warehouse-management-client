// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbvHpeFrGh83aRMpkkd5degBaQkdMqRyQ",
  authDomain: "photography-with.firebaseapp.com",
  projectId: "photography-with",
  storageBucket: "photography-with.appspot.com",
  messagingSenderId: "541980069281",
  appId: "1:541980069281:web:3d8b03988c2ca705af4fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
