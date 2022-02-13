// Added jQuery Ready functions
$(document).ready(function() {

	// call one of the method declared below!
	$.ajax();
	// call one of the method declared below!
});


// created a common variable for the url of the file called "team.json" in both method
var URL = "team.json"
// created a common variable for the url of the file called "team.json" in both method



// created a method called $.getJSON()
$.getJSON(URL, function (data) {
	
	// set the content in the particular tag to display the content in the team container
	$.each(data.members, function (key, val) {
		
		$('#team').append(`<div>
		<h2 class="name">${val.name}</h2>
		<h5 class="position">${val.position}</h5>
		<p class="bio">${val.bio}</p>
		</div>`);
		
	});
	// set the content in the particular tag to display the content in the team container
})/* .fail(function () {
	$('#team').text("content could not be retrieved");
}); */

// created a method called $.getJSON()





// careated a method called $.ajax()
$.ajax({
	// Added a GET method to retrieve data from the Json file called team.json
	type: "GET",
	// Added a GET method to retrieve data from the Json file called team.json

	// set the url from the variable declared above.
	url: URL,
	// set the url from the variable declared above.


	// the below code runs when the status is OK
	success: function (data) {
		

		// displaying the message before the actual content is going to be displayed
		var selectInput = $('#team');
		selectInput.text("Loading...");
		// displaying the message before the actual content is going to be displayed
		
		// wrapped the code in the function to delay the content to be displayed by 3 Second
		setTimeout(() => {
			// clearing out or remove the previous message called "Loading.." in the team section in HTML file
			$('#team').empty();
			// clearing out or remove the previous message called "Loading.." in the team section in HTML file


			// set the content in the particular tag to display the content in the team container
			$.each(data.members, function (key, val) {
				
				$('#team').append(`<div>
				<h2 class="name">${val.name}</h2>
				<h5 class="position">${val.position}</h5>
				<p class="bio">${val.bio}</p>
				</div>`);
				
			});
			// set the content in the particular tag to display the content in the team container

		}, 3000);
		// wrapped the code in the function to delay the content to be displayed 3 Second
	},
	// the below code runs when the status is 200 OK
	

	// the below code runs when the status is 404 Not Found
	error: function () {
		$('#team').append("content could not be retrieved");
	}
	// the below code runs when the status is 404 Not Found
});
// careated a method called $.ajax() 