import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB81QCG-QiQhF3lXaX_mF_tq6aqAFLf1-o",
  authDomain: "learning-rn-app.firebaseapp.com",
  databaseURL: "https://learning-rn-app-default-rtdb.firebaseio.com",
  projectId: "learning-rn-app",
  storageBucket: "learning-rn-app.appspot.com",
  messagingSenderId: "811348765254",
  appId: "1:811348765254:web:c2a566a36e0489b20df847",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
