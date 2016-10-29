(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/home.template.html'
  })

  // Menu categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory(categoryShortName);
      }]
    }
  });
}

})();
