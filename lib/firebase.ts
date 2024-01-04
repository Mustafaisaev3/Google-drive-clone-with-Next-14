import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-22e14.firebaseapp.com",
  projectId: "drive-22e14",
  storageBucket: "drive-22e14.appspot.com",
  messagingSenderId: "367754404711",
  appId: "1:367754404711:web:c52b05181c171ddd0185c2"
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApps()

const db = getFirestore();
const storage = getStorage()

export { db, storage };