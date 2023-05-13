import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCeZArYoVnTgXpoUsrupsaXOEd5CAiMpq8",
  authDomain: "linkedin-clone-7dd8f.firebaseapp.com",
  projectId: "linkedin-clone-7dd8f",
  storageBucket: "linkedin-clone-7dd8f.appspot.com",
  messagingSenderId: "810333980239",
  appId: "1:810333980239:web:e54f638cb55358ed754c3a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };