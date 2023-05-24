// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-C4QR90SnV4J10J-g3Eu6kz4FCjqtPmo",
  authDomain: "stardy-2b73d.firebaseapp.com",
  projectId: "stardy-2b73d",
  storageBucket: "stardy-2b73d.appspot.com",
  messagingSenderId: "450279312944",
  appId: "1:450279312944:web:82f0e5709e5083c89527f5",
  measurementId: "G-PNF1VXV0TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore 
export const db = getFirestore(app); 