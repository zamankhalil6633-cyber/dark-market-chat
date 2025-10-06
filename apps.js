// app.js
import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {
  const statusBox = document.createElement("div");
  statusBox.style.position = "fixed";
  statusBox.style.bottom = "20px";
  statusBox.style.right = "20px";
  statusBox.style.padding = "10px 15px";
  statusBox.style.background = "rgba(0,0,0,0.8)";
  statusBox.style.color = "lime";
  statusBox.style.borderRadius = "8px";
  statusBox.textContent = "Connecting to Firebase...";
  document.body.appendChild(statusBox);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      statusBox.textContent = `✅ Connected as ${user.uid.slice(0, 6)}...`;
    } else {
      statusBox.textContent = "⚠️ No user signed in";
    }
  });
});

