app.controller('homeCtrl',function($scope,$state,$http){
   
   $scope.allData = function() {
    console.log("in init of home");
    var req = {
        method : "GET",
        url : "http://localhost:2000/"
    };

   $http(req).then(function mySuccess(response) {
       console.log("GOT RESPONSE");
        $scope.dataList1 = response.data.mobile;
         $scope.dataList2 = response.data.laptop;
        console.log(response.data);
    }, function myError(response) {
        console.log(response);
    });

}

$scope.seeDescriptionLaptop = function(id) {
    console.log("in seeDescription");
    $state.go('laptopDescriptionState',{ 'id' : id }) ;

  }
  
$scope.seeDescriptionMobile = function(id) {
    console.log("in seeDescription");
    $state.go('mobileDescriptionState',{ 'id' : id }) ;

  }
  
});