app.controller("signupController", function($scope) {

	var server = new Firebase("http://loginserver.firebaseIO.com");

	$scope.name = "";
	$scope.pass = "";
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	$scope.gender;

	$scope.signedUsers;
	server.on("value", function(dataSnapshot) {
		$scope.signedUsers = dataSnapshot.val();
	});

	$scope.signUp = function() {
		server.push({
			name : $scope.name,
			pass : $scope.pass,
			firstName : $scope.firstName,
			lastName : $scope.lastName,
			email : $scope.email,
			gender : $scope.gender
		});
		alert("Your account has been set successfully. You will now be transferred to the login page");
		location.replace("index2.html");
	}
});