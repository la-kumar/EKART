app.controller('laptopCtrl',function($scope,$http,$state){
  

  $scope.alllaptop = function() {       
    var req = {
        method : "GET",
        url : "http://localhost:2000/laptops"
    };

   $http(req).then(function mySuccess(response) {
   	    console.log("init wala function sucess");
        $scope.dataList = response.data;
        console.log(response.data);
    }, function myError(response) {
        console.log(response);
    });
}

   $scope.priceFilter = function(){
    console.log($scope.slider);
     var urlText = "http://localhost:2000/laptops?price="+$scope.slider ;
      var req = {
        method : "GET",
        url : urlText
    };

   $http(req).then(function mySuccess(response) {
        $scope.dataList = response.data;
      //  console.log(response.data);
    }, function myError(response) {
        console.log(response);
    });
   }
   
  $scope.seeDescription = function(id) {
    console.log("in seeDescription");
    $state.go('laptopDescriptionState',{ 'id' : id }) ;

  }


});