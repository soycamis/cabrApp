(function() {
    'use strict';

    angular
        .module('cabrApp')
        .component('matchComponent', matchComponent());

    /* @ngInject */
    function matchComponent() {
        var component = {
            templateUrl: 'app/matchComponent/match.html',
            controller: matchController,
        };

        return component;
    }

    matchController.$inject = [];

    /* @ngInject */
    function matchController() {

    }
})();
