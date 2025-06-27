// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUJfQ2Zb_a5VWzHTumwN5Xz6_bJrBJ3yo",
  authDomain: "encanto-21ac3.firebaseapp.com",
  projectId: "encanto-21ac3",
  storageBucket: "encanto-21ac3.firebasestorage.app",
  messagingSenderId: "1068778290354",
  appId: "1:1068778290354:web:8f00ae381f051eaa029dab",
  measurementId: "G-P137ERL4SN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Exporta auth y googleProvider
export { auth, googleProvider };
