angular.module('appModule').factory('UserModel', ['$http', '$q', function($http, $q){
  var UserModel = {};
  //create a user
  UserModel.create = function(user) {
    var deferred = $q.defer();
    console.log(user);
    $http({
      method: 'POST',
      url: 'http://localhost:1337/users/create',
      dataType: 'json',
      data: angular.toJson(user),
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      console.log(data);
      deferred.resolve(angular.fromJson(data));
    }).error(function (data, status, headers, config) {
      deferred.reject(data);
    });
    return deferred.promise;
  };
  //edit a user
  UserModel.edit = function(user) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:1337/users/edit',
      dataType: 'json',
      data: angular.toJson(user),
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      console.log(data);
      deferred.resolve(angular.fromJson(data));
    }).error(function (data, status, headers, config) {
      deferred.reject(data);
    });
    return deferred.promise;
  };
  //get all users
  UserModel.findAll = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/users/find',
      dataType: 'json',
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      console.log(data);
      deferred.resolve(angular.fromJson(data));
    }).error(function (data, status, headers, config) {
      deferred.reject(data);
    });
    return deferred.promise;
  };
  //find one user by id
  UserModel.find = function(id) {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/users/find/'+id,
      dataType: 'json',
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      console.log(data);
      deferred.resolve(angular.fromJson(data));
    }).error(function (data, status, headers, config) {
      deferred.reject(data);
    });
    return deferred.promise;
  };
  //delete a user
  UserModel.remove = function(id) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/users/delete',
      dataType: 'json',
      data: angular.toJson({id: id}),
      contentType: 'application/json'
    }).success(function (data, status, headers, config) {
      console.log(data);
      deferred.resolve(angular.fromJson(data));
    }).error(function (data, status, headers, config) {
      deferred.reject(data);
    });
    return deferred.promise;
  };


  return UserModel;
}]);
