import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-7b0a7.firebaseapp.com",
  projectId: "chat-7b0a7",
  storageBucket: "chat-7b0a7.appspot.com",
  messagingSenderId: "1057477877666",
  appId: "1:1057477877666:web:e4a54163c48512a3429cfb"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();

