(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var menuDataService = this;

  menuDataService.getAllCategories = function () {
    return $http({url: 'https://davids-restaurant.herokuapp.com/categories.json'}).then(function (result) {
      return result.data.categories;
    });
  };

  menuSearchService.getItemsForCategory = function (categoryShortName) {
    var endpointName = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName;

    return $http({url: endpointName}).then(function (result) {
      return result.data.category_short_name;
    });
  };
}

})();