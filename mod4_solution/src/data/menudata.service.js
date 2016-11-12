(function () {
'use strict';

angular.module('data')
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
    var getCategory = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName;

    return $http({url: getCategory}).then(function (result) {
      return result.data.category_short_name;
    });
  };
}

})();
