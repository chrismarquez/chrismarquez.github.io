app.controller("loginController", function($scope) {

	var server = new Firebase("http://loginserver.firebaseIO.com");
	var userkey;
	$scope.name = "";
	$scope.pass = "";
	$scope.signedUsers;
	server.on("value", function(dataSnapshot) {
		$scope.signedUsers = dataSnapshot.val();
	});
	$scope.valid = function(obj) {
		if($scope.search(obj) == 0) {
			alert ("Welcome back " + obj[userkey].firstName);
		} else if ($scope.search(obj) == 1){
			alert("Invalid password, please try again");
		} else {
			alert("Invalid user, please try again");
		}
	}
	$scope.search = function(obj) {
		console.log($scope.name);
		console.log($scope.pass);
		for (user in $scope.signedUsers) {
			if(!$scope.signedUsers.hasOwnProperty(user)) {
				continue;
			}
			if ((obj[user].email == $scope.name || obj[user].name == $scope.name) && obj[user].pass == $scope.pass) {
				userkey = user;
				return 0;
			} else if ((obj[user].email == $scope.name || obj[user].name == $scope.name) && !(obj[user].pass == $scope.pass)) {
				return 1;
			}
		}
		return 2;
	}

	$("#name").keypress(function(event) {
		if(event.which == 13 || event.keyCode == 13) {
			$scope.valid($scope.signedUsers);
		}
	});
	$("#pass").keypress(function(event) {
		if(event.which == 13 || event.keyCode == 13) {
			$scope.valid($scope.signedUsers);
		}
	});
});