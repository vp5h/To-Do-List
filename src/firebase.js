import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseconfig = firebase.initializeApp({
  apiKey: 'AIzaSyBpzsf-OvNigb__2G1JeRksa-KOySjdTQQ',
  authDomain: 'todolist-81540.firebaseapp.com',
  databaseURL: 'https://todolist-81540-default-rtdb.firebaseio.com',
  projectId: 'todolist-81540',
  storageBucket: 'todolist-81540.appspot.com',
  messagingSenderId: '54991735749',
  appId: '1:54991735749:web:0bfbe41d2dd78a7bf5d9ac',
});

// sdfasfsdfdfasfdsfasdas
export { firebaseconfig as firebase };
export const auth = firebaseconfig.auth();
export const firestore = firebase.firestore();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
