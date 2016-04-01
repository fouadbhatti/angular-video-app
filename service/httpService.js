angular.module('videoApp')
	.factory('dataFactory', ['$http','config', function($http,config) {

		var urlBase = config.REST_SERVICE.base_url;
		var dataFactory = {};

		dataFactory.incrementLikes = function (videoId) {
			return $http.post(urlBase, {
				"method": "like",
				"video_id": videoId
			});
		};

		dataFactory.incrementDislikes = function (videoId) {
			return $http.post(urlBase, {
				"method": "unlike",
				"video_id": videoId
			});
		};

		dataFactory.getLikesAndDislikes = function (data) {
			return $http.get(urlBase, {
				'params': {
					"video_ids":data
				}
			});
		};

		return dataFactory;
	}]);