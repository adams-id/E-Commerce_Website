import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { //gotten from the project setup at firebase
    apiKey: "AIzaSyA0im6TP4t-F-2O7gqd9e1h0v2CavrifUA",
    authDomain: "crwn-db-f11ae.firebaseapp.com",
    projectId: "crwn-db-f11ae",
    storageBucket: "crwn-db-f11ae.appspot.com",
    messagingSenderId: "818633221299",
    appId: "1:818633221299:web:b2e48f9a84371b30a67cc6",
    measurementId: "G-1N9JFJ1DW8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => { //user document created for the firestore db
    if(!userAuth) return; //if userAuth is false, return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;