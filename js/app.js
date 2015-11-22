$( document ).ready(function() {
for ( newNumber = 1; newNumber <= 100; newNumber++) 
{
if (newNumber % 15 == 0) 
	console.log("fizz buzz");
else if (newNumber % 3 == 0)
	console.log("fizz");
else if (newNumber % 5 == 0)
	console.log("buzz");
else 
	console.log(newNumber);
}
});

