app.controller("logRestController",function($scope) {
	var server = new Firebase("https://restaurantdatabase.firebaseio.com");

	$("#selection").prop('disabled', true);

	$scope.restName = "";
	$scope.address = "";
	$scope.region = "";
	$scope.country = "";
	$scope.phone = "";
	$scope.countries;

	$scope.setRegion = function(region) {
		$("#selection").prop('disabled', false);
		if(region == "Asia") {
			$scope.countries = [
				"Korean",
				"Japanese",
				"Chinese"
			];
		} else if (region == "America") {
			$scope.countries = [
				"Mexican",
				"Argentinian",
				"Brazilian"
			];
		} else {
			$scope.countries = [
				"British",
				"Italian",
				"French"
			];
		}
	}

	$scope.send = function() {
		server.push({
			restName : $scope.restName,
			address : $scope.address,
			country : $scope.country,
			phone : $scope.phone
		});
		alert("Restaurant loaded successfully");
	}

	$(document).keypress(function(event) {
		if(event.which == 13 || event.keycode) {
			$scope.send();
		}
	});
});
