(function () {

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];

  function SignUpController(SignUpService) {
    var reg = this;
    reg.completed = true;
    reg.submit = function (short_name) {
      reg.completed = true;
      SignUpService.checkMenuItem(short_name)
        .then(
          /* success function */
          function (result) {
            reg.completed = true;
            SignUpService.saveUserInfo(reg.user.firstname, reg.user.lastname, result.data, reg.user.email, reg.user.phone);
            reg.saved = true;
          },
          /* error function */
          function (result) {
            reg.completed = false;
            reg.saved = false;
          });
    }


  }

})();