// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPzYrqsQCZP7iYde-xLFeoIMepZUFzWCE",
  authDomain: "mern-ecommerce-24-e53fe.firebaseapp.com",
  projectId: "mern-ecommerce-24-e53fe",
  storageBucket: "mern-ecommerce-24-e53fe.appspot.com",
  messagingSenderId: "950587692902",
  appId: "1:950587692902:web:4583cfa35dd7e46a7c5aa7",
  measurementId: "G-8JW555E3TV"
};

// Initialize Firebase
    export const app = initializeApp(firebaseConfig);

    export const auth = getAuth(app);
// const analytics = getAnalytics(app);