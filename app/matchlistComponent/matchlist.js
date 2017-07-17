(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('matchlistComponent', matchlistComponent());

    /* @ngInject */
    function matchlistComponent() {
        var component = {
            templateUrl: 'app/matchlistComponent/matchlist.html',
            controller: matchlistController,
            controllerAs: 'vm'
        };

        return component;
    }

    matchlistController.$inject = ['$firebaseArray', 'firebase'];

    /* @ngInject */
    function matchlistController($firebaseArray, firebase) {

      let vm = this
      vm.userCurrent = null
      vm.matchList = null

      // Consulta para usuario activo
      let currentUser = firebase.auth().currentUser.uid
      let refUser = firebase.database().ref().child('users')
      let query = refUser.orderByChild("uid").equalTo(currentUser)
      let listUser = $firebaseArray(query)

      vm.userCurrent = listUser

      // Consulta de usuarios con match
      let refMatch = firebase.database().ref().child('users')
      let query2 = refMatch.orderByChild("uid").limitToLast(5)
      let listMatch = $firebaseArray(query2)

      vm.matchList = listMatch

      console.log(listMatch)



    }
})();
