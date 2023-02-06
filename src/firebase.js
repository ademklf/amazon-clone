// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJYfjq7A2uzlHZi_7gvlrSwqGJXOGPVdk",
  authDomain: "clone-cb015.firebaseapp.com",
  projectId: "clone-cb015",
  storageBucket: "clone-cb015.appspot.com",
  messagingSenderId: "914527443652",
  appId: "1:914527443652:web:f307ac787ee4714089c791",
  measurementId: "G-2W7P1D8VMQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
