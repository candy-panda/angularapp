(function () {
	
	'use strict';

	angular.module('cpApplication').run(['$rootScope', '$state', 'DataService', 'UserService',  function ($rootScope, $state, DataService, UserService) {
        

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            $rootScope.authenticated = false;
            DataService.get('session').then(function (results) {
                if (results.uid !== '') {
                    $rootScope.authenticated = true;
                    UserService.setUser(results);
                } else {
                    if (!next.name == 'signup' && !next.name == 'login' && !next.name == 'dashboard') 
                        $state.go('dashboard');
                }
            });
        });
	}]);


})();




