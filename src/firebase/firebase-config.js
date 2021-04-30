import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDePQX0n8JkCFnvg1HK_cJ_XELC8DdQ4AI",
  authDomain: "home-4dd78.firebaseapp.com",
  databaseURL: "https://home-4dd78.firebaseio.com",
  projectId: "home-4dd78",
  storageBucket: "home-4dd78.appspot.com",
  messagingSenderId: "200162427571",
  appId: "1:200162427571:web:c5eeb489974d721e7526c6",
  measurementId: "G-V7NQYR533F"
};


//   BASE DE DATOS
firebase.initializeApp(firebaseConfig)


//   REFERENCIA A FIRESOTRE
const db = firebase.firestore()


//      PARA PODER AUTENTICACION CON GOOGLE
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


//   console.log('firebase configurado');


export  { db , firebase , googleAuthProvider }
