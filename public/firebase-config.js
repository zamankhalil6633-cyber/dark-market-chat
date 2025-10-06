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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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

