(function () {
  "use strict";

  angular.module('public')
    .service('SignUpService', SignUpService);


  SignUpService.$inject = ['$http', 'ApiPath', '$rootScope'];

  function SignUpService($http, ApiPath, $rootScope) {
    var service = this;
    var userInfo = {};


    service.checkMenuItem = function (short_name) {
      var promise = $http.get(ApiPath + '/menu_items/' + short_name + '.json');
      return promise;
    };

    service.saveUserInfo = function (firstname, lastname, favdish, email, phone) {
      userInfo.first_name = firstname;
      userInfo.last_name = lastname;
      userInfo.fav_dish = favdish;
      userInfo.email = email;
      userInfo.phone = phone;
      userInfo.registered = true;
    };

    service.getUserInfo = function () {
      return userInfo;
    };


  }



})();