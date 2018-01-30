app.controller('cartCtrl',function($scope,$http){
  

  $scope.cartData = function() {       
    var req = {
        method : "GET",
        url : "http://localhost:2000/cart"
    };

   $http(req).then(function mySuccess(response) {
   	    console.log("init wala function sucess in cart");
        $scope.dataList = response.data;
       // console.log(response.data);
       var sum = 0 ;
       for(var i = 0 ; i < response.data.length ; i = i + 1){
        sum = sum + response.data[i].cost ;
       }
       $scope.value = sum ;
    }, function myError(response) {
        console.log(response);
    });
}
   
   $scope.removeFromCart = function(id) {
       console.log("in remove"+id)
   var req = {
        method : "GET",
        url : "http://localhost:2000/cart?id="+id
    };

   $http(req).then(function mySuccess(response) {
        console.log("remove cart");
        $scope.dataList = response.data;
        console.log(response.data);
       var sum = 0 ;
       for(var i = 0 ; i < response.data.length ; i = i + 1){
        sum = sum + response.data[i].cost ;
       }
       $scope.value = sum ;
    }, function myError(response) {
        console.log(response);
    });
   
   }


});