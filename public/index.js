'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];

//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
const rentals = [{
  'id': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

console.log(cars);
console.log(rentals);
console.log(actors);


// FUNCTION FOR STEP 1 
function price(){
	//var priceArray=[];
	var aDay = 86400000;
	var date_diff,pricePerDay,pricePerKm,price ;
	for(var i= 0; i < rentals.length; i++)
	{
		var j=0;
		while(rentals[i].carId!=cars[j].id)
		{
			j++;
		}
		date_diff = Math.floor((Date.parse(rentals[i].returnDate.replace(/-/g, '\/')) - Date.parse(rentals[i].pickupDate.replace(/-/g, '\/'))) / aDay);
     	price=(date_diff+1)*cars[j].pricePerDay + rentals[i].distance*cars[j].pricePerKm;
     	rentals[i].price=price;
     	//priceArray.push(price);
	}	
	//console.log(priceArray);
}
//price()


// FUNCTION STEP 2
function price_with_decrease(){
	//var priceArray=[];
	var aDay = 86400000;
	var date_diff,pricePerDay,pricePerKm,price ;
	for(var i= 0; i < rentals.length; i++)
	{
		var j=0;
		while(rentals[i].carId!=cars[j].id)
		{
			j++;
		}
		date_diff = Math.floor((Date.parse(rentals[i].returnDate.replace(/-/g, '\/')) - Date.parse(rentals[i].pickupDate.replace(/-/g, '\/'))) / aDay);
     	price=(date_diff+1)*cars[j].pricePerDay + rentals[i].distance*cars[j].pricePerKm;
     	if(date_diff>1)
     	{
			if(date_diff>4)
			{
				if(date_diff>10)
				{
					
					price=price*0.5;
				}
	     		else
	     		{
	     			price=price*0.7;
				}
			}
     		else
     		{
     			price=price*0.9;
     		}
     	}
     	rentals[i].price=price;
     	//priceArray.push(price);
	}	
	//console.log(priceArray);
}
price_with_decrease()


// FUNCTION STEP 3
function commission(){
	var aDay = 86400000;
	var total_commission,date_diff ;
	for(var i= 0; i < rentals.length; i++)
	{
		total_commission=rentals[i].price*0.3;
		rentals[i].commission.insurance=total_commission/2;
		date_diff = Math.floor((Date.parse(rentals[i].returnDate.replace(/-/g, '\/')) - Date.parse(rentals[i].pickupDate.replace(/-/g, '\/'))) / aDay);
		rentals[i].commission.treasury=1*(date_diff+1); //we add 1 because for example if someone rent a car 1 day the date difference will be 0
		rentals[i].commission.virtuo=total_commission-(rentals[i].commission.treasury + rentals[i].commission.insurance);
	}	
}
commission()

// FUNCTION STEP 4
function deductible(){
	var aDay = 86400000;
	var total_commission,date_diff ;
	for(var i= 0; i < rentals.length; i++)
	{
		if(rentals[i].options.deductibleReduction==true)
		{
			// maybe we should check here that the function price() was run 
			date_diff = Math.floor((Date.parse(rentals[i].returnDate.replace(/-/g, '\/')) - Date.parse(rentals[i].pickupDate.replace(/-/g, '\/'))) / aDay);
			rentals[i].price=rentals[i].price+(date_diff+1)*4;
		}
	}	
}
deductible()

// FUNCTION STEP 5
function pay_actors(){
	// previously we added the deductibleReduction directly to the rental price
	// now we have to compute it again because we couldn't store its value in any particular key and we need it to compute virtuo credit
	var aDay = 86400000;
	var deductible_reduction,date_diff ;
	for(var j=0; j < actors.length; j++)
	{
		//first let's find the corresponding rental index (in the rentals array) 
		var i=0;
		while(rentals[i].id!=actors[j].rentalId) // we browse the rentals array in order to find the corresponding rental
		{
			i++;
		}
		// we then compute the deductible reudction
		deductible_reduction=0;
		if(rentals[i].options.deductibleReduction==true)
		{
			date_diff = Math.floor((Date.parse(rentals[i].returnDate.replace(/-/g, '\/')) - Date.parse(rentals[i].pickupDate.replace(/-/g, '\/'))) / aDay);
			deductible_reduction=(date_diff+1)*4;
		}
		//let's now compute the credits and debits:
		//the driver is in index 0 of payment so:
		actors[j].payment[0].amount=rentals[i].price; //we previsouly added the deductiblereduction to the price so we don't need to add it again
		//the partner:
		actors[j].payment[1].amount=rentals[i].price-(rentals[i].commission.insurance+rentals[i].commission.treasury+rentals[i].commission.virtuo);
		//the insurance
		actors[j].payment[2].amount=rentals[i].commission.insurance;
		//the treasury
		actors[j].payment[3].amount=rentals[i].commission.treasury;
		//virtuo
		actors[j].payment[4].amount=rentals[i].commission.virtuo + deductible_reduction;
		
	}
	
}
pay_actors()
