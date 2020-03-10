
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBYuwLjNmd7HvB6QdBaDjzYCltMdj3PLLI",
    authDomain: "hochzeit-sven-jennifer.firebaseapp.com",
    databaseURL: "https://hochzeit-sven-jennifer.firebaseio.com",
    projectId: "hochzeit-sven-jennifer",
    storageBucket: "hochzeit-sven-jennifer.appspot.com",
    messagingSenderId: "710307975342",
    appId: "1:710307975342:web:c29be9679f8b690eb91d3f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
