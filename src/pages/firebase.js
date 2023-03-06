import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your firebase configuration
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
