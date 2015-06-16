angular.module('LoginModule').factory('LoginData',['$http', '$q', function($http, $q){
  var LoginData = {};
  LoginData.login = function (user) {
    var deferred = $q.defer(),
      payload = {
        email: user.email,
        password: user.password
      };
    $http({
      method: 'POST',
      url: 'http://localhost:1337/login',
      data: angular.toJson(payload),
      dataType: 'json',
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      deferred.resolve(data);
    }).error(function (data, status, headers, config) {
      deferred.reject(data);


      responseObject = {
        status: failed,
        key: email,
        email: {
          reason: "inproper attribute"
        }
      }
    });
    return deferred.promise;
  };
  return LoginData;
}]);
