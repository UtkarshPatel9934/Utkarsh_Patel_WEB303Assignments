$(document).ready(function () {


	// for the Prospect
	$('a#prospect').on('click', function () {

		// 1. Create a new XMLHttpRequest object
		let xhr = new XMLHttpRequest();

		// 2. GET-request for the URL 'prospect.html'
		xhr.open('GET', 'prospect.html', true);

		// 3. using xhr.send()
		xhr.send();

		// 4. after the response is received
		xhr.onload = function() {

			if (xhr.status != 200) {
			alert(`Error page not found!`);
			} else { 
				// show the result
				let select_Prospect = document.getElementById("content");
				select_Prospect.style.display = "block";
				select_Prospect.innerHTML = xhr.responseText;


				/* for Animations */
				$('#content').hide().fadeIn(2000).css({
					'border' : '2px solid red',
					'padding' : '20px'
				});
				/* for Animations */
			}
		};

	});

	// for the Prospect





	// for the Convert

	$('a#convert').on('click', function () {

		// 1. Create a new XMLHttpRequest object
		let xhr = new XMLHttpRequest();

		// 2. GET-request for the URL 'convert.html'
		xhr.open('GET', 'convert.html', true);

		// 3. using xhr.send()
		xhr.send();

		// 4. after the response is received
		xhr.onload = function() {

			if (xhr.status != 200) {
				alert(`Error page not found!`);
			} else { 
				// show the result
				let select_Convert = document.getElementById("content");
				select_Convert.style.display = "block";
				select_Convert.innerHTML = xhr.responseText;

				/* for Animations */
				$('#content').hide().fadeIn(2000).css({
					'border' : '2px solid red',
					'padding' : '20px'
				});
				/* for Animations */
			}
		};

	});

	// for the Convert


	// for the Retain

	$('a#retain').on('click', function () {

		// 1. Create a new XMLHttpRequest object
		let xhr = new XMLHttpRequest();

		// 2. GET-request for the URL 'retain.html'
		xhr.open('GET', 'retain.html', true);

		// 3. using xhr.send()
		xhr.send();

		// 4. after the response is received
		xhr.onload = function() {

			if (xhr.status != 200) {
				alert(`Error page not found!`);
			} else { 
				// show the result
		
				var select_Retain = document.getElementById("content");
				select_Retain.style.display = "block";
				select_Retain.innerHTML = xhr.responseText;

				/* for Animations */
				$('#content').hide().fadeIn(2000).css({
					'border' : '2px solid red',
					'padding' : '20px'
				});
				/* for Animations */
			}
		};

	});

	// for the Retain

});
