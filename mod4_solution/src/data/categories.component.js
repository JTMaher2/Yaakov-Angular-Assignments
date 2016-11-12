(function () {
'use strict';

angular.module('data').component('categories', {
  template: '{{ $ctrl.getAllCategories() }}',
  bindings: {
    categories: '<'
  }
});

})();
