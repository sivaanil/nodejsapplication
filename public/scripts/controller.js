'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams) {
	$scope.customers = {};
	// pagination variables
	$scope.currentPage = 1
		,$scope.itemsPerPage= 10
		,$scope.pageSize = 5;
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		console.log('Page changed to: ' + $scope.currentPage);
	};

		userService.getData().success(function(data){
				$scope.customers = data.users;
				$scope.userscount = data.userscount;
		});
    $scope.paraer = $routeParams || '';
	$scope.profile = {};


	// To load the data if id is not empty in url
	if($scope.paraer != ''){
		userService.getUserDetails($scope.paraer.id).success(function (response) {
			$scope.profile = response[0];
		})

	}

		
	});



