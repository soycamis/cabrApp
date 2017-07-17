(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('loginComponent', loginComponent());

    /* @ngInject */
    function loginComponent() {
        var component = {
            templateUrl: 'app/loginComponent/login.html',
            controller: loginController,
            controllerAs: 'vm'
        };

        return component;
    }

    loginController.$inject = ['$scope', 'firebase', '$location'];

    /* @ngInject */
    function loginController($scope, firebase, $location) {

      let vm = this

      vm.signIn = function() {

        let provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function(result) {

          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        }

        vm.signOut = function() {
          firebase.auth().signOut().then(function() {

          }, function(error) {
              // An error happened.
          });
        }

        // Estado de la session

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

            console.log(user)

            // Obtengo el usuario actual logeado
            vm.user = user.displayName
            vm.photo = user.photoURL

            $('#login-name').show()
            $('#login-match').show()
            $('#login-signout').show()
            $('#login-signin').hide()

            // resolve: https://stackoverflow.com/questions/37776538/using-location-path-for-redirection-in-firebase
            $scope.$apply(function() {
              $location.path('/app');
            })

            console.log('sesion activa...')
          } else {

            vm.user = ''
            vm.photo = ''

            $('#login-signin').show()
            $('#login-name').hide()
            $('#login-match').hide()
            $('#login-signout').hide()
            console.log('Sesion cerrada...')
            $scope.$apply(function() {
              $location.path('/index');
            });
          }
        })
    }
})();
