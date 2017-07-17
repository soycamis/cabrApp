(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('footerComponent', footerComponent());

    /* @ngInject */
    function footerComponent() {
        var component = {
            templateUrl: 'app/footerComponent/footer.html',
            controller: footerController,
        };

        return component;
    }

    footerController.$inject = [];

    /* @ngInject */
    function footerController() {

    }
})();
