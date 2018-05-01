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
		rentalPrice: 149.99,
		numAvailable: 5,

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
    	// document.getElementById('sedanCount').innerHTML = carRental.sedan.numAvailable + ' available';
    	// document.getElementById('suvCount').innerHTML = carRental.suv.numAvailable + ' available';
    	if (carRental.sports.numAvailable < 5 && carRental.sports.numAvailable > 0) {
        	document.getElementById('sportsCount').innerHTML = `Only ${carRental.sports.numAvailable} left!`;
        	document.getElementById('sportsCount').style.color = 'red';
        	document.getElementById('sportsCount').classList.add('animated', 'flash', 'slideInRight')
    	} else if (carRental.sports.numAvailable == 0) {
        	document.getElementById('sportsCount').innerHTML = `None Left!`;
        	document.getElementById('sportsCount').style.color = 'red';
        	document.getElementById('sportsCount').classList.add('animated', 'flash', 'slideInRight')
    	} else {
    	    document.getElementById('sportsCount').innerHTML = `${carRental.sports.numAvailable} available`;
    	}
    },

    displayPrice: function(){
    	// document.getElementById('sedanPrice').innerHTML = '$' + carRental.sedan.rentalPrice + ' per day';
    	// document.getElementById('suvPrice').innerHTML = '$' + carRental.suv.rentalPrice + ' per day';
    	document.getElementById('sportsPrice').innerHTML = '$' + carRental.sports.rentalPrice + ' per day';
    	this.displayInsurance();

    },

    // This is a test to show that a value has been passed to JS and then sent back to HTML to update its content
    displayInsurance: function(){

        //variable for insurance dropdown
        var dropdown = document.getElementById("ins-dropdown");

        //get dropdown box choice from user
    	var choice = dropdown.options[dropdown.selectedIndex].text;

    	//get number of days selected
    	var tripDays = document.getElementById('daysSelected').innerHTML;

    	 if(choice == "-- Select an option --"){
    	    document.getElementById('subTotal').innerHTML = 'Subtotal: $' + (carRental.sports.rentalPrice) * parseInt(tripDays);
    	 }

    	 if(choice == "No Additional Insurance"){
            document.getElementById('choicePicked').innerHTML = choice;
            document.getElementById('subTotal').innerHTML = 'Subtotal: $' + (carRental.sports.rentalPrice) * parseInt(tripDays);
    	 }

    	 if(choice == "Basic Insurance (+$15/day)"){
    		document.getElementById('choicePicked').innerHTML = choice;
    		document.getElementById('subTotal').innerHTML = 'Subtotal: $' + (carRental.sports.rentalPrice + 15) * parseInt(tripDays);
    	 }

    	 if(choice == "Premium Insurance (+$30/day)"){
    		document.getElementById('choicePicked').innerHTML = choice;
    		document.getElementById('subTotal').innerHTML = 'Subtotal: $' + (carRental.sports.rentalPrice + 30) * parseInt(tripDays);
    	 }

     },

     displayDays: function() {

        // Get dates from html
        var date1 = new Date(document.getElementById("startDate").innerHTML);
        var date2 = new Date(document.getElementById("endDate").innerHTML);
        // console.log('date 1 = ' + date1);
        // console.log('date 2 = ' + date2);

        //Get 1 day in milliseconds
        var one_day=1000*60*60*24;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        // console.log('date 1 ms= ' + date1_ms);
        // console.log('date 2 ms= ' + date2_ms);

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        // console.log('difference_ms = ' + difference_ms);

        // Convert back to days
        var daysTotal = Math.round(difference_ms/one_day);
        // console.log("daysTotal = " + daysTotal);

        document.getElementById("daysSelected").innerHTML = `${daysTotal}`;
        // return daysTotal;
    },

}

carRental.displayAvailability();
carRental.displayPrice();
// carRental.displaySubTotal();
carRental.displayInsurance();

