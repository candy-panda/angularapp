(function () {

'use strict';

angular.module('cpApplication')

.controller('NavController', NavControllerFn)
.directive('navBar', NavBarFn);

function NavBarFn() {
	return {
		restrict: 'EA',
		scope: {},
		controller: 'NavController',
		controllerAs: 'nav',
		templateUrl: 'app/navbar/navbar.html'
	};

}

NavControllerFn.$inject = ['$rootScope'];
function NavControllerFn ($rootScope) {
		var vm = this;
		vm.authenticated = function () {
			var auth = $rootScope.authenticated;
			return auth;
		};
}
	
})();

