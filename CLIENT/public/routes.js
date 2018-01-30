var app = angular.module('myApp', ['ui.router']);

app.controller('indexCtrl', ['$scope',function($scope) {

}]);

app.config(function($sceDelegateProvider,$stateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://localhost:2000/**'

  ])
   $stateProvider
     .state('homeState', {
       url:"/",
   	   templateUrl:'home.html'
  // controller:'homeCtrl'
     })
 .state('mobileState', {
     url: "/mobiles",
     templateUrl: "mobile.html"
//     controller: 'myTableCtrl'
   })
 .state('mobileDescriptionState', {
     url: "/mobile/description",
     templateUrl: "mobileDescription.html",
     params: {
       'id' : ''
     }
     })
     .state('cartState', {
     url: "/cart",
     templateUrl: "cart.html"
//     controller: 'myTableCtrl'
   })
     .state('laptopState', {
     url: "/laptops",
     templateUrl: "laptop.html"
//     controller: 'myTableCtrl'
   })
      .state('laptopDescriptionState', {
     url: "/laptop/description",
     templateUrl: "laptopDescription.html",
     params: {
       'id' : ''
     }
     })

//     controller: 'myTableCtrl'
   
 });

// angular.module('myApp', []).config(function($sceDelegateProvider) {
//   $sceDelegateProvider.resourceUrlWhitelist([
//     // Allow same origin resource loads.
//     'self',
//     // Allow loading from our assets domain.  Notice the difference between * and **.
//     'http://srv*.assets.example.com/**'
//   ]);