'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams) {
		userService.getData().success(function(data){
			console.log(data);
				$scope.users = data;
		});
    $scope.paraer = $routeParams || '';
	$scope.profile = {};
	if($scope.paraer != ''){
		userService.getUserDetails($scope.paraer.id).success(function (response) {
			$scope.profile = response[0];
			console.log($scope.profile);
		})

	}

		
	});



