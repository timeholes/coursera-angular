(function () {
	'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider

			.state('home', {
			url: '/home',
			template: '<a ui-sref="categories">View all menu categories</a>'
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'src/categories.template.html',
			controller: 'MenuCategoriesController as menuCat',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
      }]
			}
		})

		.state('items', {
			url: '/items/{catId}',
			templateUrl: 'src/items.template.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.catId);
      }]
			}
		});
	}

})();