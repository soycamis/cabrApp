(function() {
    'use strict'

    angular
        .module('cabrApp', ['ngRoute', 'firebase'])
        .config(function() {
            let config = {
                apiKey: "AIzaSyCYRlId_RpiLzXl1m1SF9F0-7JISt0nfXo",
                authDomain: "cabrapp-94a6e.firebaseapp.com",
                databaseURL: "https://cabrapp-94a6e.firebaseio.com",
                projectId: "cabrapp-94a6e",
                storageBucket: "cabrapp-94a6e.appspot.com",
                messagingSenderId: "578656097944"

            }
            firebase.initializeApp(config)
        })
})()
