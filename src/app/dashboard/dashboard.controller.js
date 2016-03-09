(function () {

	'use strict';
	angular.module('cpApplication')
	.controller('DashboardController', DashboardCtrlFn);


	//DashboardCtrlFn.$inject = ['$scope']; 


	function DashboardCtrlFn (/*$scope*/) {

		var vm = this;
		
		vm.data = [

					{id: 1, name: 'Misha', from: 'Ukraine', age: 19},
					{id: 2, name: 'Kola', from: 'Kazahstan', age: 23},
					{id: 3, name: 'Stas', from: 'Slovakija', age: 20},
					{id: 4, name: 'Artur', from: 'Russia', age: 19},
					{id: 5, name: 'Serega', from: 'Ukraine', age: 22}
	
				];

	
		
	}
	
})();