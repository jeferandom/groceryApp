// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyCl8WjQNvmKPOIDdKHLxQp9dUTGlnWYr2s",
  authDomain: "shoppinglist-8309b.firebaseapp.com",
  projectId: "shoppinglist-8309b",
  storageBucket: "shoppinglist-8309b.appspot.com",
  messagingSenderId: "741677933330",
  appId: "1:741677933330:web:19d032ae2cbc970e20c9cb",
  measurementId: "G-BPBFP1PPWL"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db, app }