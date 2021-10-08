import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBdQdU4mbKKSQBTG_aN6as04zz4uz-5PAY",
  authDomain: "buyer-a7b97.firebaseapp.com",
  databaseURL: "https://buyer-a7b97-default-rtdb.firebaseio.com",
  projectId: "buyer-a7b97",
  storageBucket: "buyer-a7b97.appspot.com",
  messagingSenderId: "760050167445",
  appId: "1:760050167445:web:98aefd2cdb734eb81e759c",
};

const app = firebase.initializeApp(firebaseConfig);

export const database = getDatabase();

// export const getDb = getDatabase();

// export const db = firebase.firestore();

export const auth = app.auth();

// It helps in signing up with google ...

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
