(function () {
	
	'use strict';

	angular.module('cpApplication')

	.controller('InsideController', InsideControllerFn);

	InsideControllerFn.$inject = ['$scope', '$rootScope', '$state', '$http', 'DataService', 'UserService'];

	function InsideControllerFn ($scope, $rootScope, $state, $http, DataService, UserService) {
		var vm = this;	
		
		vm.data = {};

		vm.data = UserService.getUser();
		
  
		vm.logout = function () {
			DataService.get('logout').then(function(results) {
				DataService.toast(results);
				$state.go('dashboard');
			});
		}
	} 

})();



