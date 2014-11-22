angular.module('IndiegogoApp', [
	'ngResource', 
	'ngMessages', 
	'ui.router',
	'ngAnimate',
	'IndiegogoApp.Controllers',
	'IndiegogoApp.Services'
	])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "views/home.html",
		controller: "HomeCtrl"
	})
	.state('campaigns', {
		url: "/campaign",
		templateUrl: "views/campaigns.html",
		controller: "CampaignCtrl"
	})
	.state('campaignDetail', {
		url: "/campaign/:id",
		templateUrl: "views/campaign-detail.html",
		controller: "CampaignDetailCtrl"
	})
	.state('documentation', {
		url: "/documentation",
		templateUrl: "views/documentation.html",
		controller: "DocumentationCtrl"
	})
});
