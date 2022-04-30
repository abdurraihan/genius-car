// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA41AiJN1aqUmBKxrzxMkfsma3D4Aeko6I",
  authDomain: "genius-car-71039.firebaseapp.com",
  projectId: "genius-car-71039",
  storageBucket: "genius-car-71039.appspot.com",
  messagingSenderId: "877533934780",
  appId: "1:877533934780:web:f12f64f8c6a45f8f428cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
