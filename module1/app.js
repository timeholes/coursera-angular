(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = '';
    
    $scope.checkLunch = function () {
      var checkResult = dishesCount($scope.lunch);
      $scope.result = checkResult;
    };
    
    function dishesCount(string) {
      var dishesMsg = '';
      var dishesList = string.split(',');
      var dishesNumber = dishesList.length;
    
      if (string === '') {dishesMsg = 'Please enter data first'}
      else if (dishesList.length <= 3) {dishesMsg = 'Enjoy!'}
      else {dishesMsg = 'Too much!'};
      return dishesMsg;
    };
  }
  
})();