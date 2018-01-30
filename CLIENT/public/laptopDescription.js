app.controller('laptopDescriptionCtrl',function($scope,$sce,$http,$state,$stateParams) {

// var send = {}  ;

$scope.getDescription = function() {
    console.log($stateParams.id);

     var urlText = "http://localhost:2000/laptop/description?id="+$stateParams.id ;
      var req = {
        method : "GET",
        url : urlText
    };

   $http(req).then(function mySuccess(response) {
   	    console.log(response);
        $scope.dataDescription = response.data[0];
       // send = response.data[0];
      //  console.log(response.data);
    }, function myError(response) {
        console.log(response);
    });
   }

$scope.addItem = function() {
    
  var urlText = "http://localhost:2000/addCartLaptop?id="+$stateParams.id;
      var req = {
        method : "GET",
        url : urlText
    };

   $http(req).then(function mySuccess(response) {
   	   console.log(response);
      //  console.log(response.data);
    }, function myError(response) {
        console.log(response);
    }); 
    $state.go('cartState');
}
});
