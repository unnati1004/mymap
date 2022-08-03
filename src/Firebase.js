// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_vUx2QnNH4raMdyThA6IixlqjXjUS20",
  authDomain: "mymap-17a70.firebaseapp.com",
  databaseURL:"http://mymap-17a70.firebaseio.com",
  projectId: "mymap-17a70",
  storageBucket: "mymap-17a70.appspot.com",
  messagingSenderId: "477182854942",
  appId: "1:477182854942:web:c5d455d921146d290e2b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};