
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT7_5z3uPBva-egspW1iJMfMKet939rRw",
    authDomain: "todoapp-arvin.firebaseapp.com",
    projectId: "todoapp-arvin",
    storageBucket: "todoapp-arvin.appspot.com",
    messagingSenderId: "231977435341",
    appId: "1:231977435341:web:b3d74c28e5cd614cc36984"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};