import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0fJaejZ_cwNbkUmVN9Q41ajbXPQTYvVg",
  authDomain: "e-commerce-db.firebaseapp.com",
  databaseURL: "https://e-commerce-db.firebaseio.com",
  projectId: "e-commerce-db",
  storageBucket: "",
  messagingSenderId: "32245616473",
  appId: "1:32245616473:web:503c3be107a095c2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
