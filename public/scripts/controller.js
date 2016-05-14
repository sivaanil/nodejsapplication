'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams,$rootScope,$location) {
	$scope.userscount = 0;

	// pagination variables

	$scope.currentPage = 1,
	$scope.itemsPerPage= 10
		,$scope.pageSize = 5;

	$scope.pagination = {
		current : 1
	};
	$scope.pageChanged = function(newPageNumber) {
		$scope.currentPage = newPageNumber;
	}

	userService.getData().success(function(data){
		$scope.users = data.users;
		$scope.userscount = data.count;
	});
	$scope.paraer = $routeParams || '';
	$scope.profile = {};


	// To load the data if id is not empty in url
	if($scope.paraer != ''){
		userService.getUserDetails($scope.paraer.id).success(function (response) {
			$scope.profile = response[0];
		})

	}

	$scope.submitForm  = function () {
		userService.createUser($scope.profile).success(function (response) {
			if(response.insertId && response.affectedRows > 0){
				$rootScope.user_registered = 1;
				$location.url('/users');
			}
		})
	}
});



