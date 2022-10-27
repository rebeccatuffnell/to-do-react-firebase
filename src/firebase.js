// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmKBsDfKcmdju-4Y_KHyWtA_OZtyO3-r4",
  authDomain: "to-do-app-b1b5c.firebaseapp.com",
  projectId: "to-do-app-b1b5c",
  storageBucket: "to-do-app-b1b5c.appspot.com",
  messagingSenderId: "617687045627",
  appId: "1:617687045627:web:a0832d2eb71450bb63275e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)