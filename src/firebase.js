// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArUuFoKXcq0p20gW3UBGiR2paWcrbzLnU",
  authDomain: "learninghub-f4cd4.firebaseapp.com",
  projectId: "learninghub-f4cd4",
  storageBucket: "learninghub-f4cd4.appspot.com",
  messagingSenderId: "254174296683",
  appId: "1:254174296683:web:e3018d6a11e9dcd01a8f2e",
  measurementId: "G-69CVC8849S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
 export {app,auth}