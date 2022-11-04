import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCME1JsrPfSYzHvG2W5rWS4wz1-j_DYW0U",
    authDomain: "app-universidade-829f9.firebaseapp.com",
    projectId: "app-universidade-829f9",
    storageBucket: "app-universidade-829f9.appspot.com",
    messagingSenderId: "1059059791787",
    appId: "1:1059059791787:web:9fd37217e53406c9fd04ee",
    measurementId: "G-Q0NC9ZK28G"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db  = getFirestore();

  export default db;