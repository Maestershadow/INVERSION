
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDqtl8STmfaorPNV8a4uxti3UYYYVaeYmU",
  authDomain: "inversion-d6fc0.firebaseapp.com",
  projectId: "inversion-d6fc0",
  storageBucket: "inversion-d6fc0.appspot.com",
  messagingSenderId: "724299746832",
  appId: "1:724299746832:web:d9a9d1d99aca65760c4495"
};



const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();


if (window.location.hostname === "localhost") {
  auth.useEmulator("http://127.0.0.1:9099");
  db.useEmulator("127.0.0.1",8082);
}
