import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDySy197bAzU7VS0cyHLcdT9Nt3KUklW1s",
  authDomain: "stardy-e742d.firebaseapp.com",
  projectId: "stardy-e742d",
  storageBucket: "stardy-e742d.appspot.com",
  messagingSenderId: "351782339061",
  appId: "1:351782339061:web:57e53cde6215018837e0bc",
  measurementId: "G-DDS0VDQ7DE"
};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const authentication = getAuth(app);
 export const db = getFirestore(app);