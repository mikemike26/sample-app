angular.module('appModule').directive('userDisplayAll',['UserModel', '$state', '$stateParams',function(UserModel, $state, $stateParams) {
  return {
    restrict: 'A',
    templateUrl: 'templates/directives/userDisplayAll.html',
    link: function (scope, element, attrs) {
      scope.usersLoading = true;
      scope.deleteId = null;
      UserModel.findAll().then(function(data) {
        scope.users = data;
        scope.usersLoading = false;
      });
      scope.selectUser = function(user) {
        $state.transitionTo('main.user', {id: user.id});
      };
      scope.deleteUser = function(e, user) {
        e.stopPropagation();
        scope.deleteId = user.id;
      };
      scope.confirmDelete = function(e, confirm) {
        e.stopPropagation();
        if(confirm === "delete"){
          UserModel.remove(scope.deleteId).then(function(data) {
            scope.deleteId = null;
            $state.reload();
          });
        }else {
          scope.deleteId = null;
        }
      }
    }
  }
}]);
