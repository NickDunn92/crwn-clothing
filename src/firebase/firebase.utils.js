import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAimp8MqvcWH0bC_oWaF9ytiNezxMYWV8Y",
  authDomain: "crwn-db-4c21a.firebaseapp.com",
  databaseURL: "https://crwn-db-4c21a.firebaseio.com",
  projectId: "crwn-db-4c21a",
  storageBucket: "crwn-db-4c21a.appspot.com",
  messagingSenderId: "771649687638",
  appId: "1:771649687638:web:0426c3fab8d4d0e0666bf7",
  measurementId: "G-DJMHHE2ZP4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;