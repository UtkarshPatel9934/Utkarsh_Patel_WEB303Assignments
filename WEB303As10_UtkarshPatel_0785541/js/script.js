$(document).ready(function () {


	$.ajax({
		type: "Get",
		url:  "js/" + 'countries.js',
		dataType: "script",
		success: function (data) {


			var populate;
			// let select = document.getElementById('defaultOption');
			let select = `<option value="defaultOption" selected>Select your country</option>`;
			
			populate = select;
			countries.forEach(element => {
				populate += `<option value=${(element.code)}>${element.name}</option>`;
			});
			options.innerHTML = populate;
	
		},
		error: function () {
			alert("file cannot be opened.....");
		}
	});


	

	var form = document.getElementById('form');
	var options = document.getElementById('options');




	const grabSubmitBtn = document.getElementById('btn'); // grab the submit btn

	// initially submit btn is disabled
	grabSubmitBtn.disabled = true;
	


	// total conditions needs to be checked
	/* 
		1. username should be filled
		2. password contains more than 12 char
		3. confirmPassword should same as password value
		4. if check box is checked or not
		5. options should not be first ie. Select your country.
	 */

	/* variable for validation */
	var username_Filled;
	var password_Filled;
	var confirmPassword_Same;
	var checkbox_Checked;
	var option_NotDefault;
	/* variable for validation */



	// condition 1

	// check the username field is filled or not....
	document.getElementById('fname').addEventListener('keyup', e => {
		if (e.target.value == "") {
			return username_Filled = false;
		} else {
			username_Filled = true;
		}
	});
	

	// condition 2

	// checks the pasword contains at least 12 chars or not!
	var store_Password_Value;
	document.getElementById('password').addEventListener('keyup', e => {
		if ((e.target.value).length >= 12) {
			password_Filled = true;
			store_Password_Value = e.target.value;

		} else {
			password_Filled = false;
		}
	});


	// condition 3

	// checks if confirmPassword should same as password value
	document.getElementById('confirmPassword').addEventListener('keyup', e => {
		if ((e.target.value) === store_Password_Value) {
			confirmPassword_Same = true;

		} else {
			confirmPassword_Same= false;
		}
	});
	

	// condition 4

	// checks if check box is checked or not!
	document.getElementById('terms').addEventListener('change', e => {
		if (document.getElementById('terms').checked === true) {
			checkbox_Checked = true;

		} else {
			checkbox_Checked = false;
		}
	});


	// condition 5

	// options should not be first ie. Select your country.
	document.getElementById('options').addEventListener('change', e => {
		if (e.target.value !== "defaultOption") {
			option_NotDefault = true;

		} else {
			option_NotDefault = false;
		}
	});




	// for the validation of the fields........
	document.getElementById('form').addEventListener('change', function(){
		if((username_Filled == true) && (password_Filled == true) && (confirmPassword_Same == true) && (checkbox_Checked == true) && (option_NotDefault == true))
		{
			grabSubmitBtn.disabled = false;
		}

	})
	// for the validation of the fields........
	




	// when user submits the form
	form.addEventListener('submit', function (eventData) {


		eventData.preventDefault(); // prevent the default actions
		var select = document.getElementById('options'); // grab the select tag
		var text = select.options[select.selectedIndex].value; // getting the value of selected option
		var elements = this.elements; 
		var username = elements.fname.value; // get the value of username from form
		var code = text; // store the text value in code vaiable
		
		var generateMessage = `Welcome ${username}! The country code you selected is ${code}`; // genereate message based on inputs collected from form
		document.getElementById('main').textContent = generateMessage; // fills the message in the html
		form.style.display = "none"; // hide the form and dispaly the message.
	});

});
