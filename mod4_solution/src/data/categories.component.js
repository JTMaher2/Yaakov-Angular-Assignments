(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/data/templates/categories.template.html',
  controller: CategoriesController
  bindings: {
    categories: '<'
  }
});

CategoriesController.$inject = ['$rootScope']
function CategoriesController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    MenuDataService.getAllCategories();
  }
}

})();
