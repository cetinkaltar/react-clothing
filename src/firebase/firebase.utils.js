import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC84MGzh7xZUhtiF7MrZjS5lzjAfz5QiHc",
  authDomain: "crwn-db-5fc1b.firebaseapp.com",
  databaseURL: "https://crwn-db-5fc1b.firebaseio.com",
  projectId: "crwn-db-5fc1b",
  storageBucket: "crwn-db-5fc1b.appspot.com",
  messagingSenderId: "273590196487",
  appId: "1:273590196487:web:d9e9dd390c504ce3228da2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;