// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANdtIo0OI5-Oh05QDukfp4oecRo9A0cf0",
  authDomain: "devrepo-5fa7c.firebaseapp.com",
  projectId: "devrepo-5fa7c",
  storageBucket: "devrepo-5fa7c.appspot.com",
  messagingSenderId: "431871195356",
  appId: "1:431871195356:web:f2a2eb4c84311af3549c19",
  measurementId: "G-CMP4JFLSYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const username = document.getElementById('user').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === "" || password === "") {
    // Show error modal with a custom message
    document.getElementById('errorMessage').textContent = "Email and Password fields cannot be empty.";
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
    return;
  }

  const email = username + '@pncedu.com';

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Show success modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();

      // Add a delay of 3 seconds before redirecting to the dashboard
      setTimeout(() => {
        window.location.href = '../Dashboard/DashboardUser.html'; // Redirect to Dashboard.html
      }, 3000); // 3000 milliseconds = 3 seconds
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Show error modal
      document.getElementById('errorMessage').textContent = errorMessage;
      const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
      errorModal.show();
    });
})
