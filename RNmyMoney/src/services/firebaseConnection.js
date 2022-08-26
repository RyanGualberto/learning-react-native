import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyDcNmRfdO4SKW9_HDVEo9yPeRfy-w1SjpI",
  authDomain: "rnmoneyapp.firebaseapp.com",
  databaseURL: "https://rnmoneyapp-default-rtdb.firebaseio.com",
  projectId: "rnmoneyapp",
  storageBucket: "rnmoneyapp.appspot.com",
  messagingSenderId: "358120445485",
  appId: "1:358120445485:web:d9d76d3c017a76d0dbcaa4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
