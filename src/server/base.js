var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");


var config = {
    apiKey: "AIzaSyDl7m-WrkJlFbRDDPtNmsZRROP_6CyZn0w",
    authDomain: "motorsport-680f2.firebaseapp.com",
    databaseURL: "https://motorsport-680f2.firebaseio.com",
    projectId: "motorsport-680f2",
    storageBucket: "motorsport-680f2.appspot.com",
    messagingSenderId: "724013034664"
  };

export const dataBase = firebase.initializeApp(config);



    // const auth = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    // })


// const db = firebase.database(app);

// export const base = Rebase.createClass(db);

