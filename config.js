angular.module('videoApp')
	.factory('config', ['$window',function($window){

		var config = {};

		config.VIDEOS = [
			{
				"id":"yRmp-VFALqs",
				"pane":{
					"title":"Hello Convo",
					"help_text":"Convo let’s your business collaborate and share information in realtime."
				},
				"video_view":{
					"title":"Hello Convo",
					"help_text":"At Convo, we believe that work should be easier. Convo gives your business an easy platform to collaborate and share information in realtime. Convo’s here so you can get more work done in less time."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":true,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			},
			{
				"id":"OcX6EBUfMSM",
				"pane":{
					"title":"Annotations on the desktop apps",
					"help_text":"Never lose context with Convo annotations."
				},
				"video_view":{
					"title":"Annotations on the desktop apps",
					"help_text":"Convo’s annotations are used to mark-up files, provide instant feedback and have conversations over files and documents as if you’re in the same room as your entire team or customers without ever losing context. Check out how to annotate on Convo web and desktop apps."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":false,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			},
			{
				"id":"m50d6YKu3cw",
				"pane":{
					"title":"Chat",
					"help_text":"Convo chat lets you have quick conversations with your team, anywhere, anytime."
				},
				"video_view":{
					"title":"Chat",
					"help_text":"Convo chat allows you to have quick conversations with an individual or a group of teammates on all platforms. Use messaging for project check-ins, setting up meetings or even social chit chat. Here’s how to start a chat on Convo."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":true,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			},
			{
				"id":"dyO-tKRi6tc",
				"pane":{
					"title":"Bank-Grade Security",
					"help_text":"Convo's bank-grade security allows encryption in transit as well as at-rest."
				},
				"video_view":{
					"title":"Bank-Grade Security",
					"help_text":"Convo uses the latest technology and the industry best practices for data encryption of sensitive customer data. All the data and files are encrypted, in transit to and from the Convo cloud, as well as while stored within Convo."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":true,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""

			},
			{
				"id":"Tr1KHV6ObYM",
				"pane":{
					"title":"Integrate your apps",
					"help_text":"Integrate apps to get all your communication and information in one place."
				},
				"video_view":{
					"title":"Integrate your apps",
					"help_text":"Convo integrates with over 400 widely used apps like Gmail, Twitter, Salesforce, Box and DropBox etc. By linking these apps you get all your communication and information in one place. See how to set up a Convo Integration."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":false,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""

			},
			{
				"id":"GHe30eAmcQ0",
				"pane":{
					"title":"Integrate with email",
					"help_text":"See all your emails in the main Convo news feed with Gmail Integration."
				},
				"video_view":{
					"title":"Integrate with email",
					"help_text":"Check out how you can set up a Gmail Integration on Convo and see all your emails in the main Convo news feed."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":false,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			},
			{
				"id":"uqVVJ8YBBjU",
				"pane":{
					"title":"News Feed & Notifications",
					"help_text":"Customize your Convo notifications and news feed to best fit your needs."
				},
				"video_view":{
					"title":"News Feed & Notifications",
					"help_text":"With the Convo news feed you have everything you need to get your work done in one place. Easily choose which updates you want to be alerted for from a list of various notifications. Customize your web and desktop app news feed and notifications to best fit your needs."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":false,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			},
			{
				"id":"-dNQgJIJhB8",
				"pane":{
					"title":"Customize mobile notifications",
					"help_text":"Choose from a list of various notifications on your Convo mobile app."
				},
				"video_view":{
					"title":"Customize mobile notifications",
					"help_text":"Choose which updates you want to be alerted for from a list of various notifications. Customize your mobile notifications to best fit your needs."
				},
				"show_desktop_icon":false,
				"show_mobile_icon":true,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""

			},
			{
				"id":"4TqV9RyW7xE",
				"pane":{
					"title":"Setting up groups on mobile",
					"help_text":"Use Convo groups for small teams, projects or the entire office."
				},
				"video_view":{
					"title":"Setting up groups on mobile",
					"help_text":"Groups in Convo allow you to quickly share and collaborate with specific teammates. Groups can be used for small teams, projects or the entire office. Check out how to make a group in Convo for Mobile."
				},
				"show_desktop_icon":false,
				"show_mobile_icon":true,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			},
			{
				"id":"KHmLFwlRlM8",
				"pane":{
					"title":"Getting started with groups",
					"help_text":"Convo groups allow you to quickly share and collaborate with specific teammates."
				},
				"video_view":{
					"title":"Getting started with groups",
					"help_text":"Groups in Convo allow you to quickly share and collaborate with specific teammates. Groups can be used for small teams, projects or the entire office. Check out how to make groups in the Convo web and desktop apps."
				},
				"show_desktop_icon":true,
				"show_mobile_icon":false,
				"likes":"0",
				"unlikes":"0",
				"meta_tags":""
			}
		];

		config.FEEDBACK = {
			"success" : "Good to hear that. Thanks for letting us know.",
			"failure" : "Sorry to hear that. Thanks for letting us know."
		};

		config.REST_SERVICE = {
			"base_url":$window["config"].VIDEO_APP_REST_URL
		};

		config.YOUTUBE_URL = {
			"base_url":"//www.youtube.com/embed/",
			"settings": "?autoplay=1&rel=0&theme=light&showinfo=0&modestbranding=1&hd=1&autohide=1"
		};

		config.THUMBNAIL_QUALITY_TYPES = {
			"quality_sd":"/sddefault.jpg",
			"quality_hd":"/hqdefault.jpg",
			"quality_max_res":"/maxresdefault.jpg"
		};

		config.THUMBNAIL = {
			"base_url":"//img.youtube.com/vi/",
			"quality": config.THUMBNAIL_QUALITY_TYPES.quality_hd
		};

		return config;
	}]);