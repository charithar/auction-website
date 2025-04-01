import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVV4uK6dkPZrcNvyyjY2YvinlunumxKYw",
  authDomain: "silent-action-a8326.firebaseapp.com",
  projectId: "silent-action-a8326",
  storageBucket: "silent-action-a8326.firebasestorage.app",
  messagingSenderId: "465327676502",
  appId: "1:465327676502:web:1cf9dd4ff5eea6ac6eaff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();
