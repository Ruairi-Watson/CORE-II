import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAfrG8IWVO-L3IhL5ujrZ9kP0LL25A5moo",
  authDomain: "core-b25da.firebaseapp.com",
  projectId: "core-b25da",
  storageBucket: "core-b25da.firebaseapp.com",
  messagingSenderId: "122787268231",
  appId: "1:122787268231:web:04b6f39658521aec951a22",
  measurementId: "G-P3CZ5LE8YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db };

