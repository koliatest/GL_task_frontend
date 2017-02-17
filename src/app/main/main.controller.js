(function() {
  'use strict';

  angular
    .module('glTaskFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, appService) {
    var vm = this;

    vm.apps = [];
    vm.selectedApp;
    vm.selectedMonth;

    vm.months = [ "January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December" ];

    vm.datapoints = [];
    vm.datacolumns = [{"id": "electricity", "type": "bar", "name": "Electricity per day"}];
    vm.datax = {"id": "x"};

    vm.foundApp;

    activate();

    vm.onChange = function() {
      if(vm.selectedApp && vm.selectedMonth) {
        vm.datapoints = [];
        vm.foundApp = vm.apps.find(function(elem) {
          return elem.id == vm.selectedApp;
        });
        vm.foundApp.infoEntries.
          filter(function(elem) {
            return elem.month === vm.selectedMonth.toLowerCase().trim();
          }).
          forEach(function(elem) {
            vm.datapoints.push({"x": "day " + elem.numberOfTheDay, "electricity": elem.electricityPerDay});
        });
      }
    }

    function activate() {
       return getApps().then(function() {
         $log.info('Activated Apps View');
       });
    }

    function getApps() {
       return appService.getApps().then(function(data) {
         vm.apps = data;
        return vm.apps;
      });
    }
  }
})();
