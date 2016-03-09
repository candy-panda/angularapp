(function () {
	
	'use strict';

	angular.module('cpApplication')
	




	.factory('UserService', UserServiceFn);
	//UserServiceFn.$inject = ['DataService'];

	function UserServiceFn() {

		var user = {};

		return {
			getUser: function() {
				return user.data;
			},
			setUser: function (data) {		
				user.data = data;
			}

		};

	
	}


})();


