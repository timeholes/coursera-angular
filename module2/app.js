(function () {
  'use strict';
  
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl1 = this;
    ctrl1.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
    ctrl1.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
    
  };
  
  
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl2 = this;
    ctrl2.itemsBought = ShoppingListCheckOffService.getItemsBought();
  };
    
  function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
      {name: 'cookies',
      quantity: 10},
      {name: 'chocolate bars',
      quantity: 6},
      {name: 'chips',
      quantity: 12},
      {name: 'soda',
      quantity: 5},
      {name: 'ice-cream',
      quantity: 20}
    ];
    var itemsBought = [];
    service.getItemsToBuy = function () {
      return itemsToBuy;
    };
    service.getItemsBought = function () {
      return itemsBought;
    };
    service.removeItem = function (itemIndex) {
      var itemName = itemsToBuy[itemIndex].name;
      var itemQuantity = itemsToBuy[itemIndex].quantity;
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      itemsBought.push(item);
      itemsToBuy.splice(itemIndex, 1);
    }
  }
  
  })();