(function () {
'use strict';

angular.module('Data')
.component('loadingData', {
  templateUrl: 'src/data/loadingdata.template.html',
  controller: DataController
});


DataController.$inject = ['$rootScope']
function DataController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      $ctrl.showData = true;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $ctrl.showData = false;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      $ctrl.showData = false;
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };

};

})();
