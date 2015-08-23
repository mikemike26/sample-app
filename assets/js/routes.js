angular.module('appModule').config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise("/main/users");
  $stateProvider
    //main layout
      .state("main",{
        url:"/main",
        templateUrl: "templates/layout/main.html",
        abstract: true
      })
      //view all users
      .state("main.users",{
        url:"/users",
        templateUrl: "templates/pages/userAll.html"
      })
      //create a user
      .state("main.createUsers",{
        url:"/user/create",
        templateUrl: "templates/pages/userCreate.html"
      })
      //view a user's details
      .state("main.user",{
        url:"/user/:id",
        templateUrl: "templates/pages/userSingle.html"
      })
      //edit user info
      .state("main.editUser",{
        url:"/user/:id/edit",
        templateUrl: "templates/pages/userEdit.html"
      })
}]);
