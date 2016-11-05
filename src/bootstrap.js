import angular from 'angular';

import root from "./app/app";

import * as firebase from 'firebase';


// var options = {
//   strictDi:false
// };

// if (process.env.ENV === 'production') {
//     options.strictDi = true;
// }

angular.element(document).ready(function () {
    var config = {
        apiKey: "AIzaSyAOzOKB11eer6gxbdfOW2WRDHuKbQiANzw",
        authDomain: "optic-schedule.firebaseapp.com",
        databaseURL: "https://optic-schedule.firebaseio.com",
        storageBucket: "optic-schedule.appspot.com",
        messagingSenderId: "942206580960"
    };
    firebase.initializeApp(config); 
    angular.bootstrap(document, [root]);
});