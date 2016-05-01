'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams,$rootScope) {
	$scope.customers = {};
	$scope.userscount = 0;

	// pagination variables

	$scope.currentPage = 1,
	$scope.itemsPerPage= 10
		,$scope.pageSize = 5;

	$scope.pagination = {
		current : 5
	};
	this.q = $routeParams.q || '';

	var params = {
		offset : (($scope.currentPage - 1) * $scope.pageSize),
		limit : $scope.pageSize,
		q : this.q
	};

	$scope.pageChanged = function(newPageNumber) {
		console.log(newPageNumber);
		$scope.currentPage = newPageNumber;
	};


		userService.getData(params).success(function(data){
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
	});



