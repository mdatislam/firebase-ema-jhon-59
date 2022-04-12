// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQhSG7cD6XsIRGmnmdwHhy9AHMTG8e3uk",
  authDomain: "fir-ema-jhon.firebaseapp.com",
  projectId: "fir-ema-jhon",
  storageBucket: "fir-ema-jhon.appspot.com",
  messagingSenderId: "77935083736",
  appId: "1:77935083736:web:c5363679c0acadc3b957ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;