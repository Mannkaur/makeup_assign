function convert() {
	var drop1, drop2;
	var value1, value2;
	var text1, text2;

	drop1 = document.getElementById("dropdown1");
	drop2 = document.getElementById("dropdown2");

	value1 = drop1.value;
	value2 = drop2.value;
	

	if(value1=="AUD" && value2=="GBP") {
		text1= document.getElementById("from").value;
		text2= (text1 * 0.61).toFixed(2);		
	}

	else if(value1=="AUD" && value2=="CAD") {
		text1= document.getElementById("from").value;
		text2= (text1 * 1.02).toFixed(2);		
	}

	else if(value1=="AUD" && value2=="EUR")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.72).toFixed(2);		
	}

	else if(value1=="AUD" && value2=="INR") {
		text1= document.getElementById("from").value;
		text2= (text1 * 49.45).toFixed(2);		
	}	
	
	else if(value1=="AUD" && value2=="USD") {
		text1= document.getElementById("from").value;
		text2= (text1 * 0.76).toFixed(2);		
	}


	else if(value1=="GBP" && value2=="AUD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.64).toFixed(2);		
	}

	else if(value1=="GBP" && value2=="CAD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.67).toFixed(2);		
	}

	else if(value1=="GBP" && value2=="EUR")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.18).toFixed(2);		
	}

	else if(value1=="GBP" && value2=="INR")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 81.29).toFixed(2);		
	}

	else if(value1=="GBP" && value2=="USD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.25).toFixed(2);		
	}


	else if(value1=="CAD" && value2=="AUD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.98).toFixed(2);		
	}

	else if(value1=="CAD" && value2=="GBP")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.60).toFixed(2);		
	}

	else if(value1=="CAD" && value2=="EUR")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.70).toFixed(2);		
	}

	else if(value1=="CAD" && value2=="INR")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 48.65).toFixed(2);		
	}

	else if(value1=="CAD" && value2=="USD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.75).toFixed(2);		
	}


	else if(value1=="EUR" && value2=="AUD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.40).toFixed(2);		
	}

	else if(value1=="EUR" && value2=="GBP")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.85).toFixed(2);		
	}

	else if(value1=="EUR" && value2=="CAD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.42).toFixed(2);		
	}

	else if(value1=="EUR" && value2=="INR")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 69.11).toFixed(2);		
	}

	else if(value1=="EUR" && value2=="USD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 1.07).toFixed(2);		
	}

	else if(value1=="INR" && value2=="AUD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.020).toFixed(2);		
	}

	else if(value1=="INR" && value2=="GBP")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.012).toFixed(2);		
	}

	else if(value1=="INR" && value2=="CAD")	{
		text1= document.getElementById("from").value;
		text2= (text1 * 0.021).toFixed(2);		
	}

	else if(value1=="INR" && value2=="EUR") {
		text1= document.getElementById("from").value;
		text2= (text1 * 0.014).toFixed(2);		
	}

	else if(value1=="INR" && value2=="USD") {
		text1= document.getElementById("from").value;
		text2= (text1 * 0.015).toFixed(2);		
	}


	else if(value1=="USD" && value2=="AUD") {
		text1= document.getElementById("from").value;
		text2= (text1 * 1.31).toFixed(2);		
	}

	else if(value1=="USD" && value2=="GBP") {
		text1= document.getElementById("from").value;
		text2= (text1 * 0.80).toFixed(2);		
	}

	else if(value1=="USD" && value2=="CAD") {
		text1= document.getElementById("from").value;
		text2= (text1 * 1.33).toFixed(2);		
	}

	else if(value1=="USD" && value2=="EUR") {
		text1= document.getElementById("from").value;
		text2= (text1 * 0.94).toFixed(2);		
	}

	else if(value1=="USD" && value2=="INR") {
		text1= document.getElementById("from").value;
		text2= (text1 * 64.81).toFixed(2);		
	}
	
	else {
		document.getElementById("to").value = "Same Currency!!";
		return 0;
		
	}

	document.getElementById("to").value = text2;
}