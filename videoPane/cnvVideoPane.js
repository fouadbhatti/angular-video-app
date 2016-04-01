angular.module('videoApp')
.directive('cnvVideoPane',["$timeout",function($timeout){
	return{
		restrict:"E",

		templateUrl:'videoPane/cnvVideoPane.tpl.html',

		scope:{

		},

		compile:function($scope,iElement,iAttrs) {
			return {
				pre:function($scope,iElement,iAttrs, controller) {

				},

				post:function($scope,iElement,iAttrs, controller) {

					$scope.parentVideoPaneElem = iElement[0].getElementsByClassName('video-pane-collection');

					$scope.parentVideoPaneElem = $($scope.parentVideoPaneElem);


					$scope.highlightNextAndPlayVideo =  function(type){

						//Scroll Into view
						$timeout(function(){

							var active = iElement[0].getElementsByClassName('active'),
								parentOffset = $scope.parentVideoPaneElem.offset().top,
								activeOffset = $(active).offset().top,
								activeOffsetWrstParent = activeOffset - parentOffset,

								activeRelativeOffsetWrstParent = $(active).position().top;

							if(activeOffsetWrstParent > 195){

								$scope.parentVideoPaneElem.animate({scrollTop : activeRelativeOffsetWrstParent+'px'}, 250);

							}else if(activeOffsetWrstParent < 4){

								$scope.parentVideoPaneElem.animate({scrollTop : (activeRelativeOffsetWrstParent-195)+'px'}, 250);

							}
						} , 1 , false);

						if(type == "next"){

							if($scope.filterBy.length > 0){

								if($scope.filteredTumbnails.indexOf($scope.model.selected) >= 0){

									$scope.model.selected = $scope.filteredTumbnails[ ($scope.filteredTumbnails.indexOf($scope.model.selected) + 1) % $scope.filteredTumbnails.length ];

								}else{

									$scope.model.selected = $scope.filteredTumbnails[0];

								}

							}else{

								$scope.model.selected = $scope.thumbnails[($scope.thumbnails.indexOf($scope.model.selected) + 1) % $scope.thumbnails.length];

							}

						}else{


							if($scope.filterBy.length > 0){

								if($scope.filteredTumbnails.indexOf($scope.model.selected) >= 0){

									$scope.model.selected = $scope.filteredTumbnails[ ($scope.filteredTumbnails.indexOf($scope.model.selected) + $scope.filteredTumbnails.length - 1) % $scope.filteredTumbnails.length ];

								}else{

									$scope.model.selected = $scope.filteredTumbnails[$scope.filteredTumbnails.length-1];

								}

							}else{

								$scope.model.selected = $scope.thumbnails[($scope.thumbnails.indexOf($scope.model.selected) + $scope.thumbnails.length - 1) % $scope.thumbnails.length];

							}

						}

						$scope.playVideo($scope.model.selected);
					};

					$scope.changeCurrentVideoNumbers =  function(){
						if($scope.filterBy.length > 0){

						}else{
							$scope.currentVideoNum = $scope.thumbnails.indexOf($scope.model.selected)+1;
						}
					};

					$scope.playVideo = function(data){
						$scope.$parent.$broadcast('play-video', data);
						 if($(window).width() <= 1010){
							 $("body").animate({scrollTop :'0px'}, 500);
						 }
					};

				}
			}
		},

		controller:["$scope","$sce","config", 'dataFactory', function($scope,$sce,config,dataFactory){

			$scope.thumbnails = config.VIDEOS;
			$scope.model = { selected:$scope.thumbnails[0] };
			$scope. currentCount = 1;
			$scope.filterBy = "";

			function _getAllVideoLikes(thumbnails,dataFactory){

				var temp = [];

				angular.forEach(thumbnails,function(value,index){

					temp.push(value.id);
				});

				temp = temp.join(",");

				return dataFactory.getLikesAndDislikes(temp);

			}

			var promise = _getAllVideoLikes($scope.thumbnails,dataFactory);

			promise.success(function(response){

				if(response["type"] == "1"){

					angular.forEach(response["data"],function(value){

						angular.forEach($scope.thumbnails,function(obj){
							if( obj.id == value["video_id"] ){

								obj.likes = value["likes"];
								obj.dislikes = value["unlikes"];

								return true;
							}
						});

					});

					//Show feedback Display
					$scope.$parent.$broadcast('show-feedback-display');

				}else{

					//Hide feedback Display
					$scope.$parent.$broadcast('hide-feedback-display');

				}
			});

			promise.error(function(){
				//Hide feedback Display
				$scope.$parent.$broadcast('hide-feedback-display');

			});

			//Concat text for filter
			function _concatTextForFilter(data){
				angular.forEach(data,function(value,index){
					value.filter_cloud = value.pane.title + " " + value.pane.help_text + " " + value.video_view.title + " " + value.video_view.help_text + " " + value.meta_tags;
				});
			}

			_concatTextForFilter($scope.thumbnails);

		}]
	}
}]);