import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAPrmJi_G2D9Yf-J0ujt-SEDzFMq56mxwQ",
    authDomain: "netflix-clone-11745.firebaseapp.com",
    projectId: "netflix-clone-11745",
    storageBucket: "netflix-clone-11745.appspot.com",
    messagingSenderId: "584342036042",
    appId: "1:584342036042:web:b8ed63082a972e48ba10b3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth};
  export default db;
