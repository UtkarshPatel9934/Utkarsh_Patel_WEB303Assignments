
$(document).ready(function () {

	$.ajax({
		type: "Get",
		url: "charactersData.json",
		dataType: "json",
		success: function (data) {
	
			for (var i = 0; i < data.length; i++) {
				var row = $('<tr><td>' + data[i].FirstName + '</td><td>' + data[i].LastName + '</td><td>' + data[i].Status + '</td><td>' + data[i].Species + '</td><td>' + data[i].Gender + '</td><td>' + data[i].Nationality + '</td><td>' + data[i].Habitat + '</td><td>' + data[i].Talent + '</td></tr>');
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

		$(".name").each(function( index ) {
			
			var $saveName = $(this).text().toLowerCase();
			if ($saveName.includes(value)) {
				$(this).parent('tr').addClass("active");
				
			}
			else
			{
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
				}
				else
				{
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
				}
				else
				{
					$(this).hide();
				}
				saveNZ = $('tr:visible').length;

				$('#countNZ').text(`( ${saveNZ - 1} )`);
				$('#countAM').text("");

		});
		

	
	});

});