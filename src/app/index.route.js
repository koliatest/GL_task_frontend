(function() {
  'use strict';

  angular
    .module('glTaskFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/',
         templateUrl: 'app/main/loginPage.html',
         controller: 'AuthController',
         controllerAs: 'auth'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
