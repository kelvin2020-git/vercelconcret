// import "firebase/firestore";
// import "firebase/auth";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { GoogleAuthProvider } from "firebase/auth";

// import {
//   getFirestore,
//   doc,
//   setDoc,
//   collection,
//   getDocs,
// } from "firebase/firestore";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBGqzX4UrOlOspUerm4gZ6sBi7NPrCOd5k",
//   authDomain: "prueba-4e992.firebaseapp.com",
//   projectId: "prueba-4e992",
//   storageBucket: "prueba-4e992.appspot.com",
//   messagingSenderId: "490451121835",
//   appId: "1:490451121835:web:751f7a1965a45d6134a9ee",
//   measurementId: "G-97B09VVPLG"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const googleAuthProvider = new GoogleAuthProvider();

// export {
//   db,
//   googleAuthProvider,
//   doc, //Referencia a documento en Firestore
//   setDoc, // Setea Datos en la base de Firestore,
//   collection,
//   getDocs, // Importar getDocs de firebase/firestore
// };



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGqzX4UrOlOspUerm4gZ6sBi7NPrCOd5k",
  authDomain: "prueba-4e992.firebaseapp.com",
  projectId: "prueba-4e992",
  storageBucket: "prueba-4e992.appspot.com",
  messagingSenderId: "490451121835",
  appId: "1:490451121835:web:751f7a1965a45d6134a9ee",
  measurementId: "G-97B09VVPLG"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };