$( document ).ready(function() {
//user is prompted to input a number
	var userNumber = +prompt('Please submit a number'); //string is converted to a #
	fizzbuzz(userNumber); //call the function

//declare the function
function fizzbuzz (userNumber) {
	for (newNumber = 1; newNumber <= userNumber; newNumber++) 
{
	if (newNumber % 15 == 0) 
		$('body').append("fizz buzz <br>");
	else if (newNumber % 3 == 0)
		$('body').append("fizz <br>");
	else if (newNumber % 5 == 0)
		$('body').append("buzz <br>");
	else 
		$('body').append(newNumber + "<br>");
}
}
});
