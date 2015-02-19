angular.module('app.controller',[])
.controller('submitCtrl', function($scope) {
	$scope.name = '';
	$scope.email = '';
	$scope.website = '';
	$scope.message = '';

	$scope.nameError = false;
	$scope.emailError = false;
	$scope.websiteError = false;
	$scope.messageError = false;

	$scope.thanks = false;
	$scope.completed = true;

	

	$scope.submit = function () {
		if($scope.form.$valid) {
			$scope.thanks = true;
			$scope.completed = false;
			$scope.thanksText = 'Thanks for your information ' + $scope.name + '! We\'ll get back to you ASAP.';
		}
	}
});