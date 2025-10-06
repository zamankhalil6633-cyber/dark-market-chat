// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyCjTok8sKLDzb2cYmJJIw4CpSg3daAJvAs",
  authDomain: "night-market-chat.firebaseapp.com",
  projectId: "night-market-chat",
  storageBucket: "night-market-chat.firebasestorage.app",
  messagingSenderId: "748459858165",
  appId: "1:748459858165:web:bb5f0c168f8cfc26eecdbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
