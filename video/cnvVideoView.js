angular.module('videoApp')
.directive('cnvVideoView',function(){
	return{
		restrict:"E",

		templateUrl:'video/cnvVideoView.tpl.html',

		scope:{

		},

		compile:function($scope,iElement,iAttrs) {
			return {
				pre:function($scope,iElement,iAttrs, controller) {

				},

				post:function($scope,iElement,iAttrs, controller) {
					$scope.$on('play-video',function(event,data){
						$scope.setVideoUrlAndMetaData(data);
					});
				}
			}
		},

		controller:["$scope","$sce","config",function($scope,$sce,config){

			$scope.video = {};

			$scope.setVideoUrlAndMetaData =  function(data){
				$scope.video = data;
				$scope.video.url = $sce.trustAsResourceUrl(config.YOUTUBE_URL.base_url + data.id + config.YOUTUBE_URL.settings);
			};

			$scope.setVideoUrlAndMetaData(config.VIDEOS[0]);

		}]
	}
});