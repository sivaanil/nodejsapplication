(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
   var app = angular.module('raApp',
	    ['ngRoute','raApp.services','raApp.controllers','ui.bootstrap','angularUtils.directives.dirPagination','ngFileUpload','angularFileUpload']);
	app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'templates/users/list.html',
        controller: 'userController'
      }),
    $routeProvider.
        when('/user/update/:id', {
            templateUrl: 'templates/users/create.html',
            controller: 'userController'
        }),
    $routeProvider.
    when('/user/create', {
        templateUrl: 'templates/users/create.html',
        controller: 'userController'
    }).
      otherwise({
        redirectTo: '/'
      });
  }]);

    // For file uploads
    app.directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);
    // For file uploads
    app.service('fileUpload', ['$http', function ($http,$rootScope) {
        this.uploadFileToUrl = function(file, uploadUrl){
            var fd = new FormData();
            var fileInfo = {};
            fd.append('file', file);

            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                .success(function(result){

                })

                .error(function(error){


                });
        }
    }]);
})();
