(function () {
	
	'use strict';

	angular.module('cpApplication')

	.controller('LoginController', LoginControllerFn);

	LoginControllerFn.$inject = ['$scope', '$rootScope', '$state', '$http', 'DataService', 'UserService'];

	function LoginControllerFn ($scope, $rootScope, $state, $http, DataService, UserService) {
		var vm = this;
		vm.login = {};

		vm.doLogin = function (customer) {
			DataService.post('login', {customer: customer})
			.then(function (results) {
				DataService.toast(results);
				if (results.status == 'success') {
					UserService.setUser(results);
					$state.go('inside');
				}
			});
		};

		

		
	}

})();



