(function () {
	
	'use strict';

	angular.module('cpApplication')
	




	.factory('DataService', DataServiceFn);
	DataServiceFn.$inject=['$http', '$q', 'toaster'];
	function DataServiceFn($http, $q, toaster) {
    var serviceBase = '../../api/v1/';

	var object = {};

	object.toast = function (data) {
		toaster.pop(data.status, '', data.message, 10000, 'thusterHtml');
	}

	object.get = function (q) {
		return $http.get(serviceBase + q).then(function (result) {
			return result.data;
		});
	};

	object.post = function (q, obj) {
		return $http.post(serviceBase + q, obj).then(function (result) {
			return result.data;
		});
	};

	object.put = function (q, obj) {
		return $http.put(serviceBase + q, obj).then(function (result) {
			return result.data;
		});
	};

	object.delete = function (q) {
		return $http.delete(serviceBase + q).then(function (result) {
			return result.data;
		});
	};

	return object;
}


})();


