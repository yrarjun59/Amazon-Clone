import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJxeS2IjKVaKdEGRcwaLeEowtv75L_gVA",
    authDomain: "clone-b0843.firebaseapp.com",
    databaseURL: "https://clone-b0843.firebaseio.com",
    projectId: "clone-b0843",
    storageBucket: "clone-b0843.appspot.com",
    messagingSenderId: "167898922061",
    appId: "1:167898922061:web:c26b9a9a36e9b88725f004",
    measurementId: "G-0GSKQLRN49"
  });

const auth = firebase.auth();

export { auth } 
 