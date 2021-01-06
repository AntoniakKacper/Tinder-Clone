import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQL84OlTnyqh6_ZAnFzVCH-v8YhcCWCLo",
  authDomain: "tinder-clone-13ad0.firebaseapp.com",
  projectId: "tinder-clone-13ad0",
  storageBucket: "tinder-clone-13ad0.appspot.com",
  messagingSenderId: "197986160525",
  appId: "1:197986160525:web:1b0fc50614daea841cf7c4",
  measurementId: "G-HR5WWV7W42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
