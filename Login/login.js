// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaPY-n4VtVe_Qy9WX9Pb5dtR6TafBdgX0",
    authDomain: "iron-fit-b693c.firebaseapp.com",
    projectId: "iron-fit-b693c",
    storageBucket: "iron-fit-b693c.appspot.com",
    messagingSenderId: "701232096789",
    appId: "1:701232096789:web:b0f73cbcc0c2401da8901c",
    measurementId: "G-GYWWVGEBDD"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Logged in:', userCredential.user);
            // Redirect or show user info
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message').innerText = errorMessage;
        });
});


