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
    	// document.getElementById('sedanCount').innerHTML = carRental.sedan.numAvailable + ' available';
    	// document.getElementById('suvCount').innerHTML = carRental.suv.numAvailable + ' available';
    	document.getElementById('sportsCount').innerHTML = carRental.sports.numAvailable + ' available';
    },

    displayPrice: function(){
    	// document.getElementById('sedanPrice').innerHTML = '$' + carRental.sedan.rentalPrice + ' per day';
    	// document.getElementById('suvPrice').innerHTML = '$' + carRental.suv.rentalPrice + ' per day';
    	document.getElementById('sportsPrice').innerHTML = '$' + carRental.sports.rentalPrice + ' per day';
    	this.displayInsurance();
    
    },
    
    displayInsurance: function(){
    	
    	var insDropdown = document.getElementById('ins-dropdown');
    	// var selectedOption = insDropdown.options[selectedOption.selectedIndex].value;
    	// ^ this was throwing an error in the console
    	console.log('testing displayInsurance');
    	
    	var basicIns = document.getElementById('basic-ins');
    	var premiumIns = document.getElementById('prem-ins');
    	
    	if(insDropdown.value == "basic-ins")
    		document.getElementById('subTotal').innerHTML = carRental.sports.rentalPrice + 15;
    		
    	if(insDropdown.value == "prem-ins")
    		document.getElementById('subTotal').innerHTML = carRental.sports.rentalPrice + 30;
    	
    	
    },
    
    numberOfDays: function() {

        // Get dates from html
        var date1 = new Date(document.getElementById("startDate").innerHTML);
        var date2 = new Date(document.getElementById("endDate").innerHTML);
        console.log('date 1 = ' + date1);
        console.log('date 2 = ' + date2);
        
        //Get 1 day in milliseconds
        var one_day=1000*60*60*24;
        
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        console.log('date 1 ms= ' + date1_ms);
        console.log('date 2 ms= ' + date2_ms);
        
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        console.log('difference_ms = ' + difference_ms);
        
        // Convert back to days
        var daysTotal = Math.round(difference_ms/one_day); 
        console.log("daysTotal = " + daysTotal);
        
        document.getElementById("daysSelected").innerHTML = `Days Selected: ${daysTotal}`;
        // return daysTotal;
    },
    
    // This is a test to show that a value has been passed to JS and then sent back to HTML to update its content
    dropDownTest: function(){
    var dropdown = document.getElementById("ins-dropdown");
    	var choice = dropdown.options[dropdown.selectedIndex].text;
    	
    	 if (choice != "-- Select an option --"){
    		document.getElementById('choicePicked').innerHTML = "You picked: "+choice;
    	 }	
    },

    
    displaySubTotal: function(){
    },
}

carRental.displayAvailability();
carRental.displayPrice();
carRental.displaySubTotal();
carRental.displayInsurance();
carRental.dropDownTest();

    