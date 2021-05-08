import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDrhpERHokSkIuiNDQ032ZhKk4kRyuBHx8",
    authDomain: "crown-db-d5928.firebaseapp.com",
    projectId: "crown-db-d5928",
    storageBucket: "crown-db-d5928.appspot.com",
    messagingSenderId: "636587118959",
    appId: "1:636587118959:web:fd46cb292dfb2d82ba189a",
    measurementId: "G-RYBWYBVBCW"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;

