import Rebase from 're-base';
import baseApp from 'firebase/app';
import 'firebase/database';

export const firebase = baseApp.initializeApp({
    apiKey: "AIzaSyA0CvuZ5-FYd_Jd5ZX5QVuAKvHvSZ01Tsk",
    authDomain: "round-exchange-195921.firebaseapp.com",
    databaseURL: "https://round-exchange-195921.firebaseio.com",
    storageBucket: "round-exchange-195921.appspot.com",
    messagingSenderId: "40277353978"
});


    // const auth = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    // })


// const db = firebase.database(app);

// export const base = Rebase.createClass(db);

