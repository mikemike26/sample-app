angular.module('LoginModule').directive('loginForm',['LoginData' , function(LoginData){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'templates/public/login/directives/loginForm.html',
    link: function(scope, element, attrs) {
      scope.user = {};
      scope.login = function(e) {
        e.preventDefault();
        LoginData.login(scope.user).then(function(data) {
          console.log(data);
          window.location = "/";
        }).catch(function(res) {
          console.log(res);
        });
      };
    }
  }
}]);
