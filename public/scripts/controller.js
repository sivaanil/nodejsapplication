'use strict';

/* Controllers */

var raControllers = angular.module('raApp.controllers', []);

raControllers.controller('userController',['fileUpload','$window','$scope','userService','$routeParams','$rootScope','$location',function(fileUpload,$window,$scope,userService,$routeParams,$rootScope,$location) {
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
		var file = $scope.profile.userPhoto;
		var newUserDetails = $scope.profile;
		newUserDetails.user_photo = $scope.profile.userPhoto.name;
		delete newUserDetails.userPhoto;
		var uploadUrl = "http://localhost:1321/upload";
		fileUpload.uploadFileToUrl(file, uploadUrl,function (res) {

		});
		newUserDetails.userPhoto = $scope.profile.userPhoto;
			userService.createUser(newUserDetails).success(function (response) {
				console.log(response);
				if(response.insertId && response.affectedRows > 0){
					$rootScope.user_registered = 1;
					$location.url('/users');
				}
			})
	}

	$scope.upload = function (file) {
		console.log(file);
		Upload.upload({
			url: 'http://localhost:1321/upload', //webAPI exposed to upload the file
			data:{file:file} //pass file as data, should be user ng-model
		}).then(function (resp) { //upload function returns a promise
			if(resp.data.error_code === 0){ //validate success
				$window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
			} else {
				$window.alert('an error occured');
			}
		}, function (resp) { //catch error
			console.log('Error status: ' + resp.status);
			$window.alert('Error status: ' + resp.status);
		});
	};

}]);



