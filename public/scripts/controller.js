'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController', function($scope,userService,$routeParams,$location) {
		userService.getData().success(function(data){
				$scope.users = data;
		});

	$scope.edit = function(id){

		$scope.profile = {};
		$scope.msg = "sdjdsldjskj";
		userService.getUserDetails(id).success(function (response) {
		 $scope.profile = response[0];
			console.log($scope.profile);
		})
		$scope.$on('$routeChangeStart', function() {
			userService.getUserDetails(id).success(function (response) {
				$scope.profile = response[0];
				console.log($scope.profile);
			})
		});
		//$location.path('user/update/'+id);


	};
		
	});



