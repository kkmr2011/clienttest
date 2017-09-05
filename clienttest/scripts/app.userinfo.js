
// Define a module for user info controller 

var userInfoApp = angular.module("userInfo",[]);

//Controller
userInfoApp.controller("userInfo",function($scope,$http){
	$scope.showPOP = true;
	// initialize the values	
	var userPostsURL = "http://jsonplaceholder.typicode.com/posts";

	// Get the data from the servicer
	$http.get(userPostsURL).then(function(response){
		$scope.usersInfo = response.data;
		
	});

	$scope.showUserPopUp = function(){
		$scope.bodyactive = "body-deactive";
		$scope.showPOP = true;
	};
	$scope.closeUserPopUp = function(){
		$scope.bodyactive = "body-active";
		$scope.showPOP = false;
	};

	// Sort Logic for user info grid
	$scope.doSort = function(ColName){
		if(ColName === $scope.sortCol ){
			$scope.sortCol = "-"+ColName;
		}
		else{
			$scope.sortCol = ColName;
		}
	};



});