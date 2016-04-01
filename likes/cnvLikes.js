angular.module('videoApp')
	.directive('cnvLikes',function(){
		return {
			restrict:'E',
			templateUrl:'likes/cnvLikes.tpl.html',
			scope:{

			},

			compile:function(){
				return {
					pre:function($scope,iElement,iAttrs,controller){

					},

					post: function($scope,iElement,iAttrs,controller){

						$scope.$on('play-video',function(event,data){
							if($scope.video != data){
								$scope.video = data;
								$scope.showFeedback = true;
							}
						});

						$scope.$on('hide-feedback-display',function(){

							//Hide feedback if likes not loaded from server.

							$scope.disableFeedback =  true;

						});

						$scope.$on('show-feedback-display',function(){

							//Show feedback if likes not loaded from server.

							$scope.disableFeedback =  false;

						});


					}

				}
			},

			controller:["$scope","config","dataFactory", function($scope,config,dataFactory){

				$scope.disableFeedback =  true;

				$scope.video = config.VIDEOS[0];

				$scope.userGaveFeedBack =  function(videoId,like){

					if(_localStorageSetWithSameFeedback(videoId,like)){
						if( like == '1' ){
							$scope.feedbackSuccessMessage = config.FEEDBACK.success;
						}else{
							$scope.feedbackSuccessMessage = config.FEEDBACK.failure;
						}
						$scope.showFeedback =  false;
						console.log("Feedback already provided");
					}else{
						if( like == '1' ){
							_setLocalStorage(videoId,"1");
							$scope.feedbackSuccessMessage = config.FEEDBACK.success;
							_changeLikeCountServer(true,videoId);
						}else{
							_setLocalStorage(videoId,"2");
							$scope.feedbackSuccessMessage = config.FEEDBACK.failure;
							_changeLikeCountServer(false,videoId);
						}
						$scope.showFeedback =  false;


					}
				};

				function _changeLikeCountServer(flag,videoId){
					if(flag){
						//increment
						//$scope.video.likes = (parseInt($scope.video.likes) + 1).toString();

						var promise = dataFactory.incrementLikes(videoId);

						promise.success(function(response){
							if(response["type"]=="1"){
								$scope.video.likes = response.data.likes;
							}
						});


					}else{

						var promise = dataFactory.incrementDislikes(videoId);
					}
				}


				function _setLocalStorage(cname, cvalue){
					try{
						localStorage.setItem(cname,cvalue);
					}catch (e){
						console.log("Coundnt set local storage");
					}
				}

				function _getLocalStorage(cname){
					return localStorage.getItem(cname);
				}

				function _localStorageSetWithSameFeedback(videoId,currentFeedBack) {
					var localStorageValue = _getLocalStorage(videoId);
					return (localStorageValue == "1" && currentFeedBack == 1) || (localStorageValue == "2" && currentFeedBack == 2);
				}

			}]

		}
	});