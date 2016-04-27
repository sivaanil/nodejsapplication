'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams,$location) {
		userService.getData().success(function(data){
				$scope.users = data;
		});

	$scope.edit = function(id){
		$location.path('user/update/'+id);
		userService.getUserDetails().success(function (response) {

		})


	};
		
	});



