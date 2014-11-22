angular.module('IndiegogoApp.Services', [])

.constant('SERVER_URL', 'https://api.indiegogo.com/1/campaigns.json?api_token=e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346')

.constant('WEB_URL', 'https://www.indiegogo.com/projects/')

.factory('CampaignService', function($http, SERVER_URL) {
  	var service = {};

  	service.fetchCampaigns = function() {
  		return $http.get(SERVER_URL)
  				.then(function(campaigns) {
  					return campaigns;
  				});
  	};

  	return service;
  });