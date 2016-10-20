(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;

  narrowItDown.search = function () {
    MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
                     .then(function (foundItems) {
        narrowItDown.found = foundItems;
    });
  };

  narrowItDown.removeItem = function (itemIndex) {
    narrowItDown.found.splice(itemIndex, 1);
  };
}

MenuSearchService.inject = ['$http'];
function MenuSearchService($http) {
  var menuSearchService = this;

  menuSearchService.getMatchedMenuItems = function (searchTerm) {
    return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items;

        for (var i = 0; i < foundItems.length; i++) {
          // if this item does not contain search term
          if (foundItems[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            foundItems.splice(i, 1); // remove it from foundItems
            i--; // go back 1 index
          }
        }

        // return processed items
        return foundItems;
    });
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}
})();