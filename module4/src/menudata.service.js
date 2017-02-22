(function () {
	'use strict';

	angular.module('Data')
		.service("MenuDataService", MenuDataService);

	MenuDataService.$inject = ['$http']

	function MenuDataService($http) {
		var service = this;

		service.getAllCategories = function () {
			var categories = []
			var promise = $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/categories.json"
			}).then(function success(result) {
				for (var i = 0; i < result.data.length; i++) {
					var category = {
						name: result.data[i].name,
						short_name: result.data[i].short_name
					}
					categories.push(category);
				}
			});
			return categories;
		};

		service.getItemsForCategory = function (categoryShortName) {
			var items = []
			var promise = $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
			}).then(function success(result) {
				for (var i = 0; i < result.data.menu_items.length; i++) {
					var item = {
						name: result.data.menu_items[i].name,
						description: result.data.menu_items[i].description,
					}
					items.push(item);
				}
			});
			return items;
		};

	};

})();