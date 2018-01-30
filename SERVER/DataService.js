var exp = require('express');
var app = exp() ;
//service (getting data from mock json)
var datafileobj = require('./mock.json'); 
 
var cartData = [] ;

module.exports.mockData = function () { 
    console.log("In DataService");
    var data = datafileobj ;
    //console.log(data);
    return data ;
};


module.exports.getCartData = function () { 
    console.log("In DataService get  cart");
        return cartData ;
};

module.exports.addCartData = function (temp) { 
    console.log("In DataService Add to cart");
        cartData = temp ;
        return "Success" ;
};