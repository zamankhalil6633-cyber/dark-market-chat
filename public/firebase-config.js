// firebase-config.js
// This file connects your site to Firebase services like Auth, Firestore, and Storage

// Import Firebase modules directly from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// 🧩 Your Firebase project configuration
// Replace the below values with your own Firebase project info
const firebaseConfig = {
  apiKey: "AIzaSyCjTok8sKLDzb2cYmJJIw4CpSg3daAJvAs",
  authDomain: "night-market-chat.firebaseapp.com",
  projectId: "night-market-chat",
  storageBucket: "night-market-chat.firebasestorage.app",
  messagingSenderId: "748459858165",
  appId: "1:748459858165:web:bb5f0c168f8cfc26eecdbc"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: auto sign-in anonymous users
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Auth error:", error);
  });

// Log user status changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User ID:", user.uid);
  } else {
    console.log("User signed out");
  }
});

