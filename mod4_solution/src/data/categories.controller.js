(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['$stateParams'];
function CategoriesController(MenuDataService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
