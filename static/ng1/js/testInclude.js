angular.module("app",[])
.controller('CounterC',function($scope){
	$scope.cc = 0;
    $scope.counting = function(){
    	$scope.cc++;
    }
})
.controller('ngCtl',function($scope){
	$scope.myLabel = "text for label";
	$scope.myInput = "text for input";
	$scope.btnClicked = function() {
		//console.log("Label is " + $scope.myInput);
		$scope.myLabel = $scope.myInput;
	}
})