(function() {
  'use strict';

  angular
    .module('glTaskFrontend')
    .controller('AuthController', AuthController);

  /** @ngInject */
  function AuthController(authService, $location, $rootScope) {
    var vm = this;

    vm.login = function() {
        authService.login(vm.username, vm.password)
            .then(function(res) {
                $rootScope.globals = {
                    currentUser: res.data
                };
                $location.path('/home');
            })
            .catch(function(err) {
                if(err) {
                    console.log('LOGIN FAILED!');
                }
            });

    }
  }
})();
