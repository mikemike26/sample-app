angular.module('appModule').config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise("/main/users");
  $stateProvider
    //main base layout
      .state("main",{
        url:"/main",
        templateUrl: "templates/layout/main.html",
        abstract: true
      })
      .state("main.users",{
        url:"/users",
        templateUrl: "templates/pages/userAll.html"
      })
      .state("main.user",{
        url:"/user/:id",
        templateUrl: "templates/pages/userSingle.html"
      })
      .state("main.createUsers",{
        url:"/user/create",
        templateUrl: "templates/pages/userCreate.html"
      })
      .state("main.createUsers",{
        url:"/user/:id/edit",
        templateUrl: "templates/pages/userEdit.html"
      })
}]);
