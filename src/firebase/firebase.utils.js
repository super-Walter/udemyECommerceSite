import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'crwn-db-super-walter.firebaseapp.com',
  projectId: 'crwn-db-super-walter',
  storageBucket: 'crwn-db-super-walter.appspot.com',
  messagingSenderId: '196479278458',
  appId: '1:196479278458:web:0523e6f17d03c7660e4ac3',
  measurementId: 'G-Y29DR0J6DH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
