$(document).ready(function () {
	
		/* Accordiaon 1 jQuery */
		$('.accordion1 .accordionButton1').on('click', function (ez) {
			ez.preventDefault();
			var accContent1 = $(this).next('.accordionContent1');
			$('.accordionContent1').not(accContent1).slideUp();
			accContent1.not(':animated').slideToggle(1000);
		});
		/* Accordiaon 1 jQuery */

		/* Accordiaon 2 jQuery */
		$('.accordion2 .accordionButton2').on('click', function (e) {
			e.preventDefault();
			var accContent2 = $(this).next('.accordionContent2');
			$('.accordionContent2').not(accContent2).slideUp();
			accContent2.not(':animated').slideToggle(1000);
		});
		/* Accordiaon 2 jQuery */		
});