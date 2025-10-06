import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");

let currentUser = null;

// Sign in anonymously
signInAnonymously(auth).catch(console.error);

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
    console.log("Connected as:", user.uid);
    loadMessages();
  }
});

// Send message
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;

  await addDoc(collection(db, "messages"), {
    uid: currentUser.uid,
    text,
    createdAt: serverTimestamp(),
  });

  messageInput.value = "";
});

// Load messages in real time
function loadMessages() {
  const q = query(collection(db, "messages"), orderBy("createdAt"));
  onSnapshot(q, (snapshot) => {
    chatBox.innerHTML = "";
    snapshot.forEach((doc) => {
      const msg = doc.data();
      const div = document.createElement("div");
      div.classList.add("message");
      if (msg.uid === currentUser.uid) div.classList.add("mine");
      div.textContent = msg.text;
      chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

