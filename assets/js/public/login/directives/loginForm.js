angular.module('LoginModule').directive('loginForm',['LoginData' , function(LoginData){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'templates/login/directives/loginForm.html',
    link: function(scope, element, attrs) {

    }
  }
}]);
