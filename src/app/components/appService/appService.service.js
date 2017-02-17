(function() {
  'use strict';

  angular
    .module('glTaskFrontend')
    .factory('appService', appService);

  /** @ngInject */
  function appService($log, $http, $rootScope) {
      var apiHost = 'http://localhost:8080/api/appliances/user/';

      var service = {
        apiHost: apiHost,
        getApps: getApps
    };

    return service;

    function getApps() {
      return $http.get(apiHost + $rootScope.globals.currentUser.id)
        .then(getAppsComplete)
        .catch(getAppsFailed);

      function getAppsComplete(response) {
        return response.data;
      }

      function getAppsFailed(error) {
        $log.error('XHR Failed for getApps.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
