(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
   var app = angular.module('raApp',
	    ['ngRoute','raApp.services','raApp.controllers']);
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
        }).
      otherwise({
        redirectTo: '/'
      });
  }]);
	    
})();
