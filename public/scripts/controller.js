'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams) {
		userService.getData().success(function(data){
				$scope.users = data;
		});

	$scope.edit = function(id){
		console.log('+');
		console.log(id);
	};
		
	});



