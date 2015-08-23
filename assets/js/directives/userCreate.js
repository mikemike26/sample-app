angular.module('appModule').directive('userCreate',['UserModel', '$state', '$stateParams', '$timeout', function(UserModel, $state, $stateParams, $timeout) {
  return {
    restrict: 'A',
    templateUrl: 'templates/directives/userCreate.html',
    link: function (scope, element, attrs) {
      var timer;
      scope.user = {};
      scope.showError = false;
      scope.createUser = function() {
        $timeout.cancel(timer);
        scope.showError = false;
        scope.form.$submitted = true;
        if(scope.form.$invalid) {
          scope.showError = true;
          timer = $timeout(function() {
            scope.showError = false;
          }, 3000);
        }else {
          UserModel.create(scope.user).then(function() {
            $state.go('main.users');
          });
        }
      };
    }
  }
}]);
