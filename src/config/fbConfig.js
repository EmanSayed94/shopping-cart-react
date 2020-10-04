import firebase from "firebase/firebase-app";
import "firebase/firebase-firestore"
import "firebase/firebase-auth"

const settings={firee}
var firebaseConfig = {
    apiKey: "AIzaSyDZcn6TntxjbskJVyc_DAra2cLo1veIe8c",
    authDomain: "shoppingcart-f1177.firebaseapp.com",
    databaseURL: "https://shoppingcart-f1177.firebaseio.com",
    projectId: "shoppingcart-f1177",
    storageBucket: "shoppingcart-f1177.appspot.com",
    messagingSenderId: "1086884011226",
    appId: "1:1086884011226:web:7c891a7874bf76441bd9e3",
    measurementId: "G-C2KGHTZXTG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})
//   firebase.analytics();
export default firebase;
  