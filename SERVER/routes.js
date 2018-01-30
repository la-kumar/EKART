var express = require('express');
var app = express();
var dataController = require('./dataController');
var bodyParser = require('body-parser');
var path = require('path');
var file = require('fs');
var url = require('url');
var routes = express.Router();
app.use(bodyParser.json({ type: 'application/*+json' })) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var jsonParser = bodyParser.json()



routes.get('/',function(req,res){
	 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
	console.log("in routes.get ");
	  var result = dataController.allData();
  //console.log(result);
    console.log("Success");
    res.send(result);
})


routes.get('/mobiles',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log("in routes.get mobiles");
  
      //var urlText = url.parse(req.url, true); 
     // console.log(req.query);
      if(Object.keys(req.query).length === 0)
      {
             var result = dataController.listData('mobile');         
      }
  else{

     // console.log(req.query.price);
          var result = dataController.listDataLimit('mobile',req.query.price);   
      }
   // console.log(result);
    console.log("Success");
    res.send(result);
})


routes.get('/mobile/description',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log("in routes.get mobile/description");
  
      var urlText = url.parse(req.url, true); 
    //  console.log(urlText.query);
      if(Object.keys(urlText.query).length === 0)
      {
          console.log("wrong request");
              res.send("WRONG REQUEST");                        
      }
  else{
      // console.log(urlText.query.id);
     var result = dataController.mobileDescription(urlText.query.id);         
            // console.log(result);
      }
      console.log("Success");
    res.send(result);
})




routes.get('/laptops',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log("in routes.get laptop");
  
     // var urlText = url.parse(req.url, true); 
      if(Object.keys(req.query).length === 0)
      {
        var result = dataController.listData('laptop');

      }
  else{
             // console.log(req.query.price);
          var result = dataController.listDataLimit('laptop',req.query.price);   
      }
   // console.log(result);
      console.log("Success");
    res.send(result);
})



routes.get('/laptop/description',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log("in routes.get laptop/description");
  
      var urlText = url.parse(req.url, true); 
     // console.log(urlText.query);
      if(Object.keys(urlText.query).length === 0)
      {
              res.send("WRONG REQUEST");                        
      }
  else{
      // console.log(urlText.query.id);
     var result = dataController.laptopDescription(urlText.query.id);         
        //     console.log(result);
      }
      console.log("Success");
    res.send(result);
})
 


routes.get('/cart',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  console.log("in CART ");
//  console.log(req.query.id);
    if(Object.keys(req.query).length === 0)
      {
            var result = dataController.viewCart();
           // console.log(result);
            console.log("Success");
            res.send(result);                     
      }
  else{
       var dec = dataController.removeCart(req.query.id);
     //  console.log(dec);
        console.log("Success");
       res.send(dec) ;
      }

})



routes.get('/addCartMobile',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  console.log("in ADD TO CART ");
 // console.log(req.query.id);
    var result = dataController.addToCart('mobile',req.query.id);
//    console.log(result);
 console.log("Success");
    res.send("Success");
})




routes.get('/addCartLaptop',function(req,res){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  console.log("in ADD TO CART ");
 // console.log(req.query.id);
    var result = dataController.addToCart('laptop',req.query.id);
//    console.log(result);
 console.log("Success");
    res.send("Success");
})

// routes.post('/addCart', function(req, res) {
// 	 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000/*/*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     var user_id = req.body.id;
//     var token = req.body.token;
//     var geo = req.body.geo;
//     console.log(req.body.data);
//     console.log(user_id + ' ' + token + ' ' + geo);
//     res.send(user_id + ' ' + token + ' ' + geo);
// });

// routes.post('/addCart', jsonParser, function (req, res) {
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     console.log("IN POST /addCart");
//     console.log(req);
// })

module.exports = routes ;