angular.module('appModule', ['ui.router']).config(['$httpProvider',function($httpProvider) {
  //add CSRF token to header so it gets included in every request
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);
