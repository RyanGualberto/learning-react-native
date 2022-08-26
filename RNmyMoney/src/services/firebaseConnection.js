import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDACPn1vRtQUKP2FL904kMLvBey_5Yq1jM',
  authDomain: 'moneyapp-8ce2b.firebaseapp.com',
  projectId: 'moneyapp-8ce2b',
  storageBucket: 'moneyapp-8ce2b.appspot.com',
  messagingSenderId: '13226826394',
  appId: '1:13226826394:web:06a8af0e06cc845c5a5d23',
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
