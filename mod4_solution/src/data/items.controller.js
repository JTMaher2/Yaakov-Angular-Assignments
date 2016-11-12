(function () {
'use strict';

angular.module('data').controller('ItemsController', ItemsController);

ItemsController.$inject = ['$ctrl'];
function ItemsController() {
  console.log($ctrl.items);
}

})();
