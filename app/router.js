(function() {

  'use strict'


  config.$inject = ['$routeProvider']

  function config($routeProvider) {

    $routeProvider
      .when('/index', {
        template: '<index-component></index-component>'
      })
      .when('/app', {
        template: '<app-component></app-component>'
      })
      .when('/match', {
        template: '<match-component></match-component>'
      })
      .otherwise({
        redirectTo: '/index'
      })
  }

  angular
  .module('cabrApp')
  .config(config)
})()
