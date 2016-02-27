var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function($scope){

	$scope.submitForm = function(isValid){

		if(isValid){
			$scope.formValid = true;
			$scope.info = "our form is awesome";
			console.log($scope.info);	
		}

	}
});