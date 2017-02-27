(function () {

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['SignUpService'];

  function MyInfoController(SignUpService) {
    var info = this;
    var userInfo = SignUpService.getUserInfo();

    info.myInfo = userInfo;
    if (userInfo.registered == true) {
      info.signup = true
    } else {
      info.signup = false
    };
  }

})();