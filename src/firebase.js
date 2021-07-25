import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUHTKfyCNdLbPRzcRlAS6zTtSSbQdgBns",
  authDomain: "todo-app-cp-6618a.firebaseapp.com",
  projectId: "todo-app-cp-6618a",
  storageBucket: "todo-app-cp-6618a.appspot.com",
  messagingSenderId: "681202767865",
  appId: "1:681202767865:web:965c7aa759f43647ef0f28",
  measurementId: "G-M2LPVT5LZ7",
});

const db = firebaseApp.firestore();

export default db;
