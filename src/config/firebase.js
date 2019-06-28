import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAFlaDicRvyXayM_F8GIZP3ySkwfjCEpaU",
    authDomain: "foodpanda-6ac89.firebaseapp.com",
    databaseURL: "https://foodpanda-6ac89.firebaseio.com",
    projectId: "foodpanda-6ac89",
    storageBucket: "foodpanda-6ac89.appspot.com",
    messagingSenderId: "885854027515",
    appId: "1:885854027515:web:8b901dad3e19eeb1"
  };

    firebase.initializeApp(firebaseConfig);

export default firebase;