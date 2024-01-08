import {auth,signInWithEmailAndPassword} from "./firebase.js"
const login = () =>{
const email = document.getElementById("email")
const password = document.getElementById("password")
// console.log(email.value, password.value)

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user.email === "admin@gmail.com") {
        location.href = "dashboard.html"
    }
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("err->",errorMessage)``
  });

}
const loginBtn = document.getElementById("loginBtn")
loginBtn && loginBtn.addEventListener("click" , login)