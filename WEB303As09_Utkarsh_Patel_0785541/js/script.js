$(document).ready(function () {

	$.ajax({
		type: "Get",
		url: "charactersData.json",
		dataType: "json",
		success: function (data) {

			for (var i = 0; i < data.length; i++) {
				var row = $('<tr><td>' + data[i].FirstName + '</td><td>' + data[i].LastName + '</td><td>' + data[i].Status + '</td><td>' + data[i].Species + '</td><td>' + data[i].Gender + '</td><td>' + data[i].Nationality + '</td><td>' + data[i].Habitat + '</td><td>' + data[i].DOB + '</td><td>' + data[i].Talent + '</td></tr>');
				$('#charactersData').append(row);
			}
			var $selectAllTr = $('tr td:first-child');
			$selectAllTr.addClass("name");
		},
		error: function () {
			alert("file cannot be opened.....");
		}
	});




	$("#FilterCharacters").keypress(function () {


		var value = $(this).val().toLowerCase();

		$(".name").each(function (index) {

			var $saveName = $(this).text().toLowerCase();
			if ($saveName.includes(value)) {
				$(this).parent('tr').addClass("active");

			} else {
				$(this).parent('tr').removeClass("active");
			}
		});
	});



	var saveAM;


	$("#AM").on("click", function () {
		$("#charactersData tr:not(:first-child)").filter(function (e) {
			var id = $(this).find("td:eq(1)").text();

			if (id.includes("A") || id.includes("B") || id.includes("C") || id.includes("D") || id.includes("E") || id.includes("F") || id.includes("G") || id.includes("H") || id.includes("I") || id.includes("J") || id.includes("K") || id.includes("L") || id.includes("M")) {
				$(this).show();
			} else {
				$(this).hide();
			}
			saveAM = $('tr:visible').length;

			$('#countAM').text(`( ${saveAM - 1} )`);
			$('#countNZ').text("");
		});



	});

	$("#NZ").on("click", function () {
		$("#charactersData tr:not(:first-child)").filter(function (e) {
			var id = $(this).find("td:eq(1)").text();

			if (id.includes("N") || id.includes("O") || id.includes("P") || id.includes("Q") || id.includes("R") || id.includes("S") || id.includes("T") || id.includes("U") || id.includes("V") || id.includes("W") || id.includes("X") || id.includes("Y") || id.includes("Z")) {
				$(this).show();
			} else {
				$(this).hide();
			}
			saveNZ = $('tr:visible').length;

			$('#countNZ').text(`( ${saveNZ - 1} )`);
			$('#countAM').text("");

		});



	});




/* define the filtering types  */


	var compare = {
		asc: function (a, b) {
		    console.log("processing the words", b, ", ", a);
		    if (b < a) {
			return -1;
		    }
		    else if (b > a) {
			return 1
		    }
		    else //they're equal
		    {
			return 0;
		    }
		},
		desc: function (a, b) {
		    console.log("processing the words", b, ", ", a);
		    if (a < b) {
			return -1;
		    }
		    else if (b < a) {
			return 1
		    }
		    else //they're equal
		    {
			return 0;
		    }
		},
		compareNumbersAscending: function (a, b) {
		    // b is the first value being compared, a is the second
		    console.log("processing the numbers", b, ", ", a);
		    return parseInt(a) - parseInt(b);
		},
		compareNumbersDescending: function (a, b) {
		    // b is the first value being compared, a is the second
		    console.log("processing the numbers", b, ", ", a);
		    return b - a;
		},
		compareNumbersRandom: function (a, b) {
		    return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
		},
		compareDates: function (a, b) {
		    var dateA = new Date(a);
		    var dateB = new Date(b);
		    return dateA - dateB;
		}
	    };
	    
/* define the filtering types  */





/* filtering Last Name */

	$('#lname').click(function (e) {
		e.preventDefault(); // prevent the link to be called
		if ($(this).hasClass("active")) {

			/* show and hide the alternate chevron */
			$('#gt_forlname').show();
			$('#lt_forlname').hide();
			/* show and hide the alternate chevron */
			
			$("#lname").removeClass("active");
			
				var $getTable_lname = $('#charactersData');


				/* sort the table */
				$getTable_lname.find('tr:gt(0)').sort(function (grabFirst, grabSecond) {

					var getFirstEle_lname = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_lname = $(grabSecond).find('td:eq(0)').text();


					// for sorting ascending
					return compare.asc(getFirstEle_lname, getSecondEle_lname);

				}).appendTo($getTable_lname);
		}
		else {
			/* show and hide the alternate chevron */
			$('#lt_forlname').show();
			$('#gt_forlname').hide();
			/* show and hide the alternate chevron */
			
			$("#lname").removeClass("active");
			$(this).addClass("active");
			

				var $getTable_lname = $('#charactersData');


				/* sort the table */
				$getTable_lname.find('tr').sort(function (grabFirst, grabSecond) {

					var getFirstEle_lname = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_lname = $(grabSecond).find('td:eq(0)').text();


					// for sorting descending
					return compare.desc(getFirstEle_lname, getSecondEle_lname);
					
				}).appendTo($getTable_lname);
		}
	})

/* filtering Last Name */





/* filtering First Name */

	$('#fname').click(function (e) {
		e.preventDefault(); // prevent the link to be called
		if ($(this).hasClass("active")) {
			/* show and hide the alternate chevron */
			$('#gt_forfname').show();
			$('#lt_forfname').hide();
			/* show and hide the alternate chevron */


			$("#fname").removeClass("active");
			
				var $getTable_fname = $('#charactersData');


				/* sort the table */
				$getTable_fname.find('tr:gt(0)').sort(function (grabFirst, grabSecond) {

					var getFirstEle_fname = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_fname = $(grabSecond).find('td:eq(0)').text();


					// for sorting ascending
					return compare.asc(getFirstEle_fname, getSecondEle_fname);

				}).appendTo($getTable_fname);
		}
		else {
			/* show and hide the alternate chevron */
			$('#lt_forfname').show();
			$('#gt_forfname').hide();
			/* show and hide the alternate chevron */

			$("#fname").removeClass("active");
			$(this).addClass("active");
			

				var $getTable_fname = $('#charactersData');


				/* sort the table */
				$getTable_fname.find('tr').sort(function (grabFirst, grabSecond) {

					var getFirstEle_fname = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_fname = $(grabSecond).find('td:eq(0)').text();


					// for sorting descending
					return compare.desc(getFirstEle_fname, getSecondEle_fname);
					
				}).appendTo($getTable_fname);
		}
	})

/* filtering First Name */





/* filtering DOB */

	$('#DOB').click(function (e) {
		e.preventDefault(); // prevent the link to be called

		if ($(this).hasClass("active")) {
			/* show and hide the alternate chevron */
			$('#gt_fordate').show();
			$('#lt_fordate').hide();
			/* show and hide the alternate chevron */


			$("#DOB").removeClass("active");
			
				var $getTable_fordate = $('#charactersData');


				/* sort the table */
				$getTable_fordate.find('tr:gt(0)').sort(function (grabFirst, grabSecond) {

					var getFirstEle_fordate = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_fordate = $(grabSecond).find('td:eq(0)').text();


					// for sorting ascending
					return compare.asc(getFirstEle_fordate, getSecondEle_fordate);

				}).appendTo($getTable_fordate);
		}
		else {
			/* show and hide the alternate chevron */
			$('#lt_fordate').show();
			$('#gt_fordate').hide();
			/* show and hide the alternate chevron */


			$("#DOB").removeClass("active");
			$(this).addClass("active");
			

				var $getTable_fordate = $('#charactersData');


				/* sort the table */
				$getTable_fordate.find('tr').sort(function (grabFirst, grabSecond) {

					var getFirstEle_fordate = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_fordate = $(grabSecond).find('td:eq(0)').text();


					// for sorting descending
					return compare.desc(getFirstEle_fordate, getSecondEle_fordate);
					
				}).appendTo($getTable_fordate);
		}
	})
	

/* filtering DOB */







/* filtering Status */

	$('#status').click(function (e) {
		e.preventDefault(); // prevent the link to be called

		if ($(this).hasClass("active")) {
			/* show and hide the alternate chevron */
			$('#gt_forstatus').show();
			$('#lt_forstatus').hide();
			/* show and hide the alternate chevron */
			
			$("#status").removeClass("active");
			
				var $getTable_forstatus = $('#charactersData');


				/* sort the table */
				$getTable_forstatus.find('tr:gt(0)').sort(function (grabFirst, grabSecond) {

					var getFirstEle_forstatus = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_forstatus = $(grabSecond).find('td:eq(0)').text();


					// for sorting ascending
					return compare.asc(getFirstEle_forstatus, getSecondEle_forstatus);

				}).appendTo($getTable_forstatus);
		}
		else {
			/* show and hide the alternate chevron */
			$('#lt_forstatus').show();
			$('#gt_forstatus').hide();
			/* show and hide the alternate chevron */


			$("#status").removeClass("active");
			$(this).addClass("active");
			

				var $getTable_forstatus = $('#charactersData');


				/* sort the table */
				$getTable_forstatus.find('tr').sort(function (grabFirst, grabSecond) {

					var getFirstEle_forstatus = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_forstatus = $(grabSecond).find('td:eq(0)').text();


					// for sorting descending
					return compare.desc(getFirstEle_forstatus, getSecondEle_forstatus);
					
				}).appendTo($getTable_forstatus);
		}
	})

/* filtering Status */






/* filtering Spices */

	$('#species').click(function (e) {
		e.preventDefault(); // prevent the link to be called

		if ($(this).hasClass("active")) {
			/* show and hide the alternate chevron */
			$('#gt_forspecies').show();
			$('#lt_forspecies').hide();
			/* show and hide the alternate chevron */

			$("#species").removeClass("active");
			
				var $getTable_forspecies = $('#charactersData');


				/* sort the table */
				$getTable_forspecies.find('tr:gt(0)').sort(function (grabFirst, grabSecond) {

					var getFirstEle_forspecies = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_forspecies = $(grabSecond).find('td:eq(0)').text();


					// for sorting ascending
					return compare.asc(getFirstEle_forspecies, getSecondEle_forspecies);

				}).appendTo($getTable_forspecies);
		}
		else {
			/* show and hide the alternate chevron */
			$('#lt_forspecies').show();
			$('#gt_forspecies').hide();
			/* show and hide the alternate chevron */


			$("#species").removeClass("active");
			$(this).addClass("active");
			

				var $getTable_forspecies= $('#charactersData');


				/* sort the table */
				$getTable_forspecies.find('tr').sort(function (grabFirst, grabSecond) {

					var getFirstEle_forspecies = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_forspecies = $(grabSecond).find('td:eq(0)').text();


					// for sorting descending
					return compare.desc(getFirstEle_forspecies, getSecondEle_forspecies);
					
				}).appendTo($getTable_forspecies);
		}
	})

/* filtering Spices */





/* filtering Talent */

	$('#talent').click(function (e) {
		e.preventDefault(); // prevent the link to be called

		if ($(this).hasClass("active")) {
			/* show and hide the alternate chevron */
			$('#gt_fortalent').show();
			$('#lt_fortalent').hide();
			/* show and hide the alternate chevron */


			$("#talent").removeClass("active");
			
				var $getTable_fortalent = $('#charactersData');


				/* sort the table */
				$getTable_fortalent.find('tr:gt(0)').sort(function (grabFirst, grabSecond) {

					var getFirstEle_fortalent = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_fortalent = $(grabSecond).find('td:eq(0)').text();


					// for sorting ascending
					return compare.asc(getFirstEle_fortalent, getSecondEle_fortalent);

				}).appendTo($getTable_fortalent);
		}
		else {
			/* show and hide the alternate chevron */
			$('#lt_fortalent').show();
			$('#gt_fortalent').hide();
			/* show and hide the alternate chevron */


			$("#talent").removeClass("active");
			$(this).addClass("active");
			

				var $getTable_fortalent = $('#charactersData');


				/* sort the table */
				$getTable_fortalent.find('tr').sort(function (grabFirst, grabSecond) {

					var getFirstEle_fortalent = $(grabFirst).find('td:eq(0)').text();
					var getSecondEle_fortalent = $(grabSecond).find('td:eq(0)').text();


					// for sorting descending
					return compare.desc(getFirstEle_fortalent, getSecondEle_fortalent);
					
				}).appendTo($getTable_fortalent);
		}
	})

/* filtering Talent */


});