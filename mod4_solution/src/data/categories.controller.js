(function () {
'use strict';

angular.module('data').controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['$ctrl'];
function CategoriesController() {
  console.log($ctrl.categories);
}

})();
