<!DOCTYPE html>
<html class="no-js">
<head>
	<title>Youtube Videos</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="shortcut icon" href=""/>

	<!-- Bootstrap & Styles -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
	<link href="videos.css" rel="stylesheet">
	<!-- Bootstrap & Styles -->

	<!-- Google Fonts -->
	<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600' rel='stylesheet' type='text/css'>
	<!-- Google Fonts -->

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

</head>

<body>
<!-- Content -->
<div ng-app="videoApp" class="video-app">
	<!-- Video Box -->
	<div class="container" ng-controller="AppCtrl">
		<div class="row top">
			<div class="col-md-8">
				<div class="top-h1">My favourite videos</div>
				<cnv-video-view></cnv-video-view>
				<cnv-likes></cnv-likes>
			</div>
			<div class="col-md-4">
				<cnv-video-pane></cnv-video-pane>
			</div>
		</div>
	</div>
</div>
<!-- Content -->

<!-- app -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script type="text/javascript" src="app.js"></script>
<script type="text/javascript" src="video/cnvVideoView.js"></script>
<script type="text/javascript" src="videoPane/cnvVideoPane.js"></script>
<script type="text/javascript" src="likes/cnvLikes.js"></script>
<script type="text/javascript" src="config.js"></script>
<script type="text/javascript" src="service/httpService.js"></script>
<!-- app -->
</body>
</html>