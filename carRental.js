console.log('linked')

var carRental = {

	sedan: {
		rentalPrice: 80,
		numAvailable: 18,

	},

	suv: {
		rentalPrice: 100,
		numAvailable: 0,

	},

	sports: {
		rentalPrice: 150,
		numAvailable: 6,

    },

    updateAvailability: function(carType){

    	if(this[carType].numAvailable == 0)
    		alert(`We're all out of ${carType}'s! Please select another vehicle.`)

    	if(this[carType].numAvailable > 0){ //if there's at least one available
    		alert(`Would you like to rent a ${carType} for $${this[carType].rentalPrice} per day?`);
    		this[carType].numAvailable--; //reduce numAvailable by 1
			console.log(carRental)
			carRental.displayAvailability();

    	}
    },

    displayAvailability: function(){
    	document.getElementById('sedanCount').innerHTML = carRental.sedan.numAvailable + ' available';
    	document.getElementById('suvCount').innerHTML = carRental.suv.numAvailable + ' available';
    	document.getElementById('sportsCount').innerHTML = carRental.sports.numAvailable + ' available';
    },

    displayPrice: function(){
    	document.getElementById('sedanPrice').innerHTML = '$' + carRental.sedan.rentalPrice + ' per day';
    	document.getElementById('suvPrice').innerHTML = '$' + carRental.suv.rentalPrice + ' per day';
    	document.getElementById('sportsPrice').innerHTML = '$' + carRental.sports.rentalPrice + ' per day';
    },

}

carRental.displayAvailability();
carRental.displayPrice();