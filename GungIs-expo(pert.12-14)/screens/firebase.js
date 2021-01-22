import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAUuMe_XvXgBWB6G5fFDLFF3QYy4-v70-E",
    authDomain: "project-gung.firebaseapp.com",
    projectId: "project-gung",
    storageBucket: "project-gung.appspot.com",
    messagingSenderId: "1020318075949",
    appId: "1:1020318075949:web:d3b9aa2437790b8fcebca4",
    measurementId: "G-6187L254NL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore()
  const bd=firebase.database()
  export default{
      firebase,db,bd
  }