'use strict';

/* Services */
var raServices = angular.module('raApp.services', []);
raServices.service('userService', function($http) {
this.getData = function() {
	
    return $http({
        method: 'GET',
        url: 'http://localhost:1321/fetchusers',
     })
        
    
 }
    this.getUserDetails = function(id) {

        return $http({
            method: 'GET',
            url: 'http://localhost:1321/fetchuser/'+id,
        })


    }
});
