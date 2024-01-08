
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDPC28Mpu9ACpJyHrqsky092AnP1AUUNqY",
    authDomain: "smit-batch-10-62ee6.firebaseapp.com",
    projectId: "smit-batch-10-62ee6",
    storageBucket: "smit-batch-10-62ee6.appspot.com",
    messagingSenderId: "30229933255",
    appId: "1:30229933255:web:847d61d3d9ab4fe5a9e2e2"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
export{
    auth,
    signInWithEmailAndPassword
}