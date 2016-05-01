'use strict';

/* Services */
var raServices = angular.module('raApp.services', []);
var host ="http://localhost:1321";
raServices.service('userService', function($http) {
this.getData = function() {
	
    return $http({
        method: 'GET',
        url: host+'/fetchusers',
     })
        
    
 }
    this.getUserDetails = function(id) {

        return $http({
            method: 'GET',
            url: host+'/fetchuser/'+id,
        })


    }
});
