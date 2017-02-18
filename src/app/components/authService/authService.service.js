(function() {
  'use strict';

  angular
    .module('glTaskFrontend')
    .factory('authService', authService);

  /** @ngInject */
  function authService($http, base64, $rootScope) {
      var apiHost = 'http://env-5160480.unicloud.pl/api/login/';

      var service = {
        apiHost: apiHost,
        login: login,
        logout: logout
    };

    return service;

    function login(username, password) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(username + ':' + password);
      return $http.post(apiHost, { username: username, password: password })
        .then(function(res){
          return res;
        })
        .catch(function(err) {
          console.log('ERROR!');
        });
    }

    function logout() {
      $rootScope.globals = {};
      $http.defaults.headers.common.Authorization = 'Basic ';
    }
  }
})();
