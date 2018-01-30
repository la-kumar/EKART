var exp = require('express');
var app = exp() ;
var dataService = require('./DataService');

module.exports.allData = function(){
	console.log("In dataController In allData");
	var obj = dataService.mockData();
	//console.log(obj);
	console.log("Success");
	return obj ;
}

module.exports.listData = function(type){
	console.log("In dataController In listData");
	var obj = dataService.mockData();
	if(type == 'mobile')
	{//console.log(obj.mobile);
			console.log("Success");
	return obj.mobile ;
    }
    else if(type == 'laptop'){
    		console.log("Success");
    return obj.laptop ;
    }

}


module.exports.listDataLimit = function(type,range){
	console.log("In dataController In listDataLimit with range="+range);
	var obj = dataService.mockData();
	if(type == 'mobile')
	{ //console.log(obj.mobile);
		var temp = [] ;
		for(var i = 0 ; i < obj.mobile.length ; i = i + 1){
			//console.log(obj.mobile[i].cost);
			if(obj.mobile[i].cost <= range){
				temp.push(obj.mobile[i]);
			}
		}
		//console.log(temp);
			console.log("Success");
      return temp ;
	 }
    else if(type == 'laptop')
	{ //console.log(obj.laptop);
		var temp = [] ;
		for(var i = 0 ; i < obj.laptop.length ; i = i + 1){
			//console.log(obj.laptop[i].cost);
			if(obj.laptop[i].cost <= range){
				temp.push(obj.laptop[i]);
			}
		}
		//console.log(temp);
			console.log("Success");
      return temp ;
	 }	

}

module.exports.mobileDescription = function(id){
	console.log("In dataController In mobileDescription"+ id);
	var obj = dataService.mockData();
    obj = obj.mobile ;
   // console.log(obj);
    var temp = [] ;
    for(var i = 0 ; i < obj.length ; i= i+1){
    	//console.log(obj[i].id +" == "+ id)
    	if(obj[i].id == id){
    		temp.push(obj[i]) ;
    	}
    }	
   // console.log(temp);
   	console.log("Success");
	return temp ;
}


module.exports.laptopDescription = function(id){
	console.log("In dataController In laptopDescription"+ id);
	var obj = dataService.mockData();
    obj = obj.laptop ;
  //  console.log(obj);
    var temp = [] ;
    for(var i = 0 ; i < obj.length ; i= i+1){
    	//console.log(obj[i].id +" == "+ id)
    	if(obj[i].id == id){
    		temp.push(obj[i]) ;
    	}
    }	
  //  console.log(temp);
  	console.log("Success");
	return temp ;
}


module.exports.addToCart = function(type,id){
	console.log("In dataController In addToCart with id="+id);
	var obj = dataService.mockData();
	var cart = dataService.getCartData() ;
	if(type == 'mobile')
	{ //console.log(obj.mobile);
		
		for(var i = 0 ; i < obj.mobile.length ; i = i + 1){
			//console.log(obj.mobile[i].cost);
			if(obj.mobile[i].id == id){
				cart.push(obj.mobile[i]);
                dataService.addCartData(cart);
               // console.log(cart);
			}
		}
			console.log("Success");
      return cart ;
	 }
    else if(type == 'laptop')
	   { //console.log(obj.laptop);
			for(var i = 0 ; i < obj.laptop.length ; i = i + 1){
			//console.log(obj.laptop[i].cost);
			if(obj.laptop[i].id == id){
				cart.push(obj.laptop[i]);
                dataService.addCartData(cart);
			}
		}
		//console.log(cart);
			console.log("Success");
      return "Sucess" ;
	 }	

}


module.exports.viewCart = function(){
	console.log("In dataController In view");
	var obj = dataService.getCartData();
   // console.log(obj);
   	console.log("Success");
	return obj ;
}


module.exports.removeCart = function(id){
	console.log("In dataController In remove from cart");
	var obj = dataService.getCartData();
    for(var i = 0 ; i < obj.length ; i = i + 1 ){
       if(obj[i].id == id){
         obj.splice(i,1);
       }
    }
    dataService.addCartData(obj);
   // console.log(obj);
   	console.log("Success");
    return obj ;
}