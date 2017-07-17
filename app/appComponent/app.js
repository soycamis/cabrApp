(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('appComponent', appComponent());

    /* @ngInject */
    function appComponent() {
        var component = {
            templateUrl: 'app/appComponent/app.html',
            controller: appController,
        };

        return component;
    }

    appController.$inject = ['$scope', 'firebase', '$location'];

    /* @ngInject */
    function appController($scope, firebase, $location) {

      // Parallax
      $('.parallax').parallax()








      // Estado de la session
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // resolve: https://stackoverflow.com/questions/37776538/using-location-path-for-redirection-in-firebase
          $scope.$apply(function() {
            $location.path('/app');
          })
          console.log('sesion activa checada desde appComponent...')
        } else {
          $scope.$apply(function() {
            $location.path('/index');
          });
          console.log('sesion cerrada checada desde appComponent...')
        }
      })

    }
})();
