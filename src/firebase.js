import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB121G32IQVjHVTHIRKzBkHvBeWOfqPXeo",
    authDomain: "twitter-clone-5bfa5.firebaseapp.com",
    databaseURL: "https://twitter-clone-5bfa5.firebaseio.com",
    projectId: "twitter-clone-5bfa5",
    storageBucket: "twitter-clone-5bfa5.appspot.com",
    messagingSenderId: "421564274829",
    appId: "1:421564274829:web:c223e5a876b03d3f2caac4",
    measurementId: "G-6BZ958VGRK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 