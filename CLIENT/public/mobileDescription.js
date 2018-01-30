app.controller('mobileDescriptionCtrl',function($scope,$sce,$http,$state,$stateParams) {


$scope.getDescription = function() {
    console.log($stateParams.id);

     var urlText = "http://localhost:2000/mobile/description?id="+$stateParams.id ;
      var req = {
        method : "GET",
        url : urlText
    };

   $http(req).then(function mySuccess(response) {
   	    console.log(response);
        $scope.dataDescription = response.data[0];
       // send = response.data[0];
      //  console.log(response.data);
      
// var londDescId = response.data[0].ld.split(",");
// for(var i in longDescId){
//   $scope.descPoint = longDescId[i] ;
// }
    }, function myError(response) {
        console.log(response);
    });
   }

$scope.addItem = function() {
    
  var urlText = "http://localhost:2000/addCartMobile?id="+$stateParams.id;
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
//      var urlText = "http://localhost:2000/addCart" ;
//     //   var req = {
//     //     method : "POST",
//     //     url : urlText,

//     // };

//    $http({
//     method: 'POST',
//     url: urlText,
//     data: send,
//      headers: {'Access-Control-Allow-Origin':'*'}
// }).then(function mySuccess(response) {
//    	    console.log(response);
//       //   $scope.dataDescription = response.data[0];
//       //   send = response.data[0];
//       // //  console.log(response.data);
//     }, function myError(response) {
//         console.log(response);
//     });


});
