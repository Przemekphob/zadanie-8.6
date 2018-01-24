//option 1
var a = 0;
var b = 1;
var value = (a * a) - (2 * a * b) + (b * b);


console.log(value);

if (value > 0) {
	console.log('value is higher than 0');
}	else if (value == 0) {
		console.log('value = 0');
}	else {
		console.log('value is lower than 0');
}



//option 2
var c = prompt("give 1st number");		
var d = prompt("give 2nd number");
var value2 = (c * c) - (2 * c * d) - (d * d);

if (value2 > 0) {
	alert('value is higher than 0');
}	else if (value2 < 0) {
		alert('value is lower than 0');
}	else {
		alert('value = 0');
}
