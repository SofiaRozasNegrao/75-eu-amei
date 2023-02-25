import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCGBqw7nAWo1bw3I8Af_XWxxddy8E7p7zs",
  authDomain: "de-novo-c8ff3.firebaseapp.com",
  projectId: "de-novo-c8ff3",
  storageBucket: "de-novo-c8ff3.appspot.com",
  messagingSenderId: "1931418133",
  appId: "1:1931418133:web:bafa7bb120eb4e0f7acc1c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
