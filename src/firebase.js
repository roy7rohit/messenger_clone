// const firebaseConfig = {
//   apiKey: "AIzaSyAQKgeuorNmkx-83nthqTlkz84EExZSULk",
//   authDomain: "messenger-app-a423c.firebaseapp.com",
//   projectId: "messenger-app-a423c",
//   storageBucket: "messenger-app-a423c.appspot.com",
//   messagingSenderId: "936771315065",
//   appId: "1:936771315065:web:644b495d233790a4327ba8",
//   measurementId: "G-2R9H0LD9P0"
// };

import firebase from 'firebase';

const fb = firebase.initializeApp({
  apiKey: "AIzaSyAQKgeuorNmkx-83nthqTlkz84EExZSULk",
  authDomain: "messenger-app-a423c.firebaseapp.com",
  projectId: "messenger-app-a423c",
  storageBucket: "messenger-app-a423c.appspot.com",
  messagingSenderId: "936771315065",
  appId: "1:936771315065:web:644b495d233790a4327ba8",
  measurementId: "G-2R9H0LD9P0"
});

const db = fb.firestore();
export default db;