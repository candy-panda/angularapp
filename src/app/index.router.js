(function () {

	'use strict';

	angular.module('cpApplication')
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('dashboard', {
				url: '/',
				templateUrl: 'app/dashboard/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'dctrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'app/login/login.html',
				controller: 'LoginController',
				controllerAs: 'lctrl'
			})
			.state('signup', {
				url: '/signup',
				templateUrl: 'app/signup/signup.html',
				controller: 'SignUpController',
				controllerAs: 'sctrl'
			})
			.state('inside', {
				url: '/inside',
				templateUrl: 'app/inside/inside.html',
				controller: 'InsideController',
				controllerAs: 'ictrl'
			});
	
			

	});


})();

