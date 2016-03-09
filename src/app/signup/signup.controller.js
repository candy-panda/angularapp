(function () {

	'use strict';

	angular.module('cpApplication')
	.controller('SignUpController', SignUpCtrlFn);

	SignUpCtrlFn.$inject = ['$scope', '$rootScope', '$state', '$http', 'DataService'];

	function SignUpCtrlFn ($scope, $rootScope, $state, $http, DataService) {
		var vm = this;
		vm.signup = {};

		
		vm.signUp = function (customer) {
			DataService.post('signup', {customer:customer})
			.then(function (results) {
				DataService.toast(results);
				if (results.status == 'success') {
					$state.go('login');
				}
			});
		};
	}
})();

