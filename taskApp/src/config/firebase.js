import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCf9LhAd1JKyoO4i_n5321DI6okq8Pmst8',
  authDomain: 'tasksapp-a94ea.firebaseapp.com',
  projectId: 'tasksapp-a94ea',
  storageBucket: 'tasksapp-a94ea.appspot.com',
  messagingSenderId: '334134728495',
  appId: '1:334134728495:web:88c57e4bae6d44cc6933da',
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
