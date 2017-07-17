(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('indexComponent', indexComponent());

    /* @ngInject */
    function indexComponent() {
        var component = {
            templateUrl: 'app/indexComponent/index.html',
            controller: indexController,
            controllerAs: 'vm'
        };

        return component;
    }

    indexController.$inject = ['firebase', '$location'];

    /* @ngInject */
    function indexController(firebase, $location)  {

      // slider fullscreen
      $('.slider').slider({ indicators: true })
    }
})();
