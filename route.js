angular.module('app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    	.when('/', {
			templateUrl: 'src/app/view/dashboard/dashboard.tpl.html',
			controller: 'dashboardController'
		})
		.when('/jediList', {
			templateUrl: 'src/app/view/jedi/listJedi/jediList.tpl.html',
			controller: 'jediListController'
		})
    }])