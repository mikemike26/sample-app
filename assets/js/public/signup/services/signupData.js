angular.module('SignupModule').factory('SignupData',['$http', '$q', function ($http, $q) {
  var SignupData = {};

  SignupData.createUser = function (user) {
    var deferred = $q.defer(),
      payload = {
        name: user.name,
        email: user.email,
        password: user.password
      };
    $http({
      method: 'POST',
      url: 'http://localhost:1337/signup',
      data: angular.toJson(payload),
      dataType: 'json',
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      deferred.resolve(data);
    }).error(function (data, status, headers, config) {
      deferred.reject(data);
    });
    return deferred.promise;
  };
  return SignupData;
}]);
