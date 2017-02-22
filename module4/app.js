(function () {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);
  
  function FoundItems() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      myFoundItems: '=',
      onRemove: '&'
    }
  };
  return ddo;
  };
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = ""
    ctrl.errorMsg = false
    ctrl.getMatchedMenuItems = function (searchTerm) {
      ctrl.myfoundItems = [];
      if (searchTerm === "") {
        return ctrl.errorMsg = true;
      } else {
        ctrl.errorMsg = false;
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function(value){
        ctrl.myfoundItems = value;
        if (ctrl.myfoundItems.length < 1) {
        return ctrl.errorMsg = true;
      }
      });
      }
    }
    ctrl.removeItem = function (index) {
     ctrl.myfoundItems.splice(index,1);
    };
  };
  
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      }).then(function success(result) {
        var foundItems = [];
        var searchString = searchTerm.toLowerCase();
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var dish = result.data.menu_items[i].description.toLowerCase();
          if (dish.indexOf(searchString) !== -1) {
            foundItems.push(result.data.menu_items[i]);
          }
        }
        return foundItems;
      },
             function error(result){
        console.log("Error: " + result);
      });

    };
    
  }
  
  })();