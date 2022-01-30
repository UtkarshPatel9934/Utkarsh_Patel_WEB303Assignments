/*
	WEB 303 Assignment 1 - jQuery
	Student Name: Utkarsh Patel
	Student Number: 0785541
*/


/* Step 2: Edit the existing main.js file. Write your code inside a jQuery document ready function. */

$(document).ready(function () {
	

	/* Step 3: Create an event handler to run whenever the salary and percent fields have changed ("change" event). */
	$("input").on("keyup", function() {

		/* getting the value of the Salary from Input */
		var $saveSalary = $('#yearly-salary').val();
		/* getting the value of the Salary from Input */
		
		/* getting the value of the percent from the Input */
		var $savePercent = $('#percent').val();
		/* getting the value of the percent from the Input */


		/* Step 4: In the event handler,calculate the amount you can spend on tech, with a dollar sign, and insert it into the span#amount element using jQuery. */
		
		var $result = $saveSalary * $savePercent / 100;
		


		/* Step 7: Use the built in toFixed() method to round the number to dollars and cents. That will get rid of extra decimal places. */

		var $saveResult = `$` + $result.toFixed(2);
		
		/* Step 7: Use the built in toFixed() method to round the number to dollars and cents. That will get rid of extra decimal places. */
		


		
		$('span#amount').text($saveResult);
		
		/* Step 4: In the event handler,calculate the amount you can spend on tech, with a dollar sign, and insert it into the span#amount element using jQuery. */
	});
	/* Step 3: Create an event handler to run whenever the salary and percent fields have changed ("change" event). */
	
});

/* Step 2: Edit the existing main.js file. Write your code inside a jQuery document ready function. */