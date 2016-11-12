(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to homes page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: '<h1>Menu App</h1>'
  })

  // Menu categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.js',
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  /*.state('items', {
    url: '/items/{category}',
    controller: 'ItemsController as items',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory(categoryShortName);
      }]
    }
  })*/;
}

})();
