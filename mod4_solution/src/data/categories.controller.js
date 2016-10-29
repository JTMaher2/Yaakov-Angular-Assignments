(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['$stateParams'];
function MainShoppingListController(ShoppingListService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
