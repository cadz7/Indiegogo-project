/*
	Campaign Controller
*/
angular.module('IndiegogoApp.Controllers')

.controller('CampaignCtrl', function ($scope, $log, CampaignService, WEB_URL) {

	CampaignService.fetchCampaigns()
		.then(function(returnedCampaignObj) {
			$log.log(returnedCampaignObj);
			$scope.campaignList = returnedCampaignObj.data.response;
		})
		.catch(function(error) {
			$log.error(error);
		});

	$scope.openLink = function(campaignName) {
		var campaignLink = WEB_URL + campaignName;
		window.open(campaignLink, '_blank');
	};	

})
