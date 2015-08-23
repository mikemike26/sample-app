angular.module('appModule').directive('userEdit',['UserModel', '$state', '$stateParams', '$timeout', function(UserModel, $state, $stateParams, $timeout) {
  return {
    restrict: 'A',
    templateUrl: 'templates/directives/userCreate.html',
    link: function (scope, element, attrs) {
      var timer;
      scope.user = {};
      scope.showError = false;
      UserModel.find($stateParams.id).then(function(data) {
        scope.user = data;
      });
      scope.createUser = function() {
        console.log(scope);
        $timeout.cancel(timer);
        scope.showError = false;
        scope.form.$submitted = true;
        if(scope.form.$invalid) {
          scope.showError = true;
          timer = $timeout(function() {
            scope.showError = false;
          }, 3000);
        }else {
          UserModel.edit(scope.user).then(function() {
            $state.go('main.users');
          });
        }
      };
    }
  }
}]);
