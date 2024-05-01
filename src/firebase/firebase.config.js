// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBVhLv_zbtDuN498kJTBF6kaY-pU3-_E",
  authDomain: "learning-web-c.firebaseapp.com",
  projectId: "learning-web-c",
  storageBucket: "learning-web-c.appspot.com",
  messagingSenderId: "699601334570",
  appId: "1:699601334570:web:00ec13a054695c6801ee53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;