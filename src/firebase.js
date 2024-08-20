import { initializeApp } from "firebase/app";
 import { getFirestore } from 'firebase/firestore';
 import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAWp_FS9_8o16WQ3554vdioCJsFRmufoLc",
    authDomain: "linkedin-1f520.firebaseapp.com",
    projectId: "linkedin-1f520",
    storageBucket: "linkedin-1f520.appspot.com",
    messagingSenderId: "360076551571",
    appId: "1:360076551571:web:0c20ffe59f860927523466"
};
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth();
//  export const provider = new GoogleAuthProvider();
//  provider.setCustomParameters({ prompt: 'select_account' });