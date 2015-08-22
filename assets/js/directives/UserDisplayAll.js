angular.module('appModule').directive('userDisplayAll',['UserModel', '$state', '$stateParams',function(UserModel, $state, $stateParams) {
  return {
    restrict: 'A',
    templateUrl: 'templates/directives/userDisplayAll.html',
    link: function (scope, element, attrs) {
      scope.usersLoading = true;
      UserModel.findAll().then(function(data) {
        scope.users = data;
        scope.usersLoading = false;
      });
    }
  }
}]);
