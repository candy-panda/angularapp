(function () {

	'use strict';

	angular.module('cpApplication')
	.config(ConfigFn);

	ConfigFn.$inject = ['$locationProvider'];

	function ConfigFn($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}

})();