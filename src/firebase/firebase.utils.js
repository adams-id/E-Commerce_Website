import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0im6TP4t-F-2O7gqd9e1h0v2CavrifUA",
    authDomain: "crwn-db-f11ae.firebaseapp.com",
    projectId: "crwn-db-f11ae",
    storageBucket: "crwn-db-f11ae.appspot.com",
    messagingSenderId: "818633221299",
    appId: "1:818633221299:web:b2e48f9a84371b30a67cc6",
    measurementId: "G-1N9JFJ1DW8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;