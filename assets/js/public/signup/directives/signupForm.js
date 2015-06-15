angular.module('SignupModule').directive('signupForm',['SignupData' , function(SignupData){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'templates/public/signup/directives/signupForm.html',
    link: function(scope, element, attrs) {
      scope.user = {};
      scope.signup = function(e) {
        e.preventDefault();
        SignupData.createUser(scope.user).then(function(data) {
          console.log(data);
          window.location = "/";
        }).catch(function(res) {
          console.log(res);
        });
      };
    }
  }
}]);
