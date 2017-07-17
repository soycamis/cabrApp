(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('usersComponent', usersComponent());

    /* @ngInject */
    function usersComponent() {
        var component = {
            templateUrl: 'app/usersComponent/users.html',
            controller: usersController,
            controllerAs: 'vm'
        };

        return component;
    }

    usersController.$inject = ['$firebaseArray', 'firebase'];

    /* @ngInject */
    function usersController($firebaseArray, firebase) {

      let vm = this

      // Carga los usuarios y los muestra
      let refUsers = firebase.database().ref().child('users')
      let list = $firebaseArray(refUsers)
      vm.users = list
      console.log(list)

      // inicia la carga de toast
      $('.tooltipped').tooltip({delay: 50})

      // Funciones...
      vm.like = function(uid, username) {
        console.log('mi like para' + uid)
         Materialize.toast(username + ' agregada!', 3000, 'rounded')
      }

      vm.nope = function(username) {
        Materialize.toast('Nope ' + username, 3000, 'rounded')
      }
    }
})();
