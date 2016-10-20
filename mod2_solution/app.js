(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [ { name: "Item1", quantity: 1 }, { name: "Item2", quantity: 2 },
                     { name: "Item3", quantity: 3 }, { name: "Item4", quantity: 4 },
                     { name: "Item5", quantity: 5 } ];
  var boughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  };

  service.buyItem = function(index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1); // remove from to buy list
  };
};

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getToBuyItems();
  console.log(buyList.items);

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  buyList.emptyMessage = function () {
    if (buyList.items.length == 0)
      return true;
    else
      return false;
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.emptyMessage = function () {
    if (boughtList.items.length == 0)
      return true;
    else
      return false;
  }
}
})();
