// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // ✅ Your actual config
// const firebaseConfig = {
//   apiKey: "AIzaSyASVCUUSb3wDOs9IYDLQww6d_36DEZPSLs",
//   authDomain: "placement-portal0.firebaseapp.com",
//   projectId: "placement-portal0",
//   storageBucket: "placement-portal0.appspot.com", // fixed typo here!
//   messagingSenderId: "192841508010",
//   appId: "1:192841508010:web:b0e3677b0ab4d7f8a35cd3",
//   measurementId: "G-X2XGRLCN3S"
// };

// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // ✅ Export everything needed
// export { app, auth, db, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink };


































// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASVCUUSb3wDOs9IYDLQww6d_36DEZPSLs",
  authDomain: "placement-portal0.firebaseapp.com",
  projectId: "placement-portal0",
  storageBucket: "placement-portal0.appspot.com",
  messagingSenderId: "192841508010",
  appId: "1:192841508010:web:b0e3677b0ab4d7f8a35cd3",
  measurementId: "G-X2XGRLCN3S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithPopup, signOut };
