/* Tabbed jQuery */
$(".tab-list").each(function () {
	
	var $thisEle = $(this); 
	var $tab_li = $thisEle.find("li.active"); 
	var $getLink = $tab_li.find("a");
	var $panel_active = $($getLink.attr("href"));
	$thisEle.on("click", ".tab-control", function (e) {
		
		e.preventDefault();
		var $currLink = $(this);
		var id = this.hash; 
		if (id && !$currLink.parent().is(".active")) {
			
			$panel_active.removeClass("active"); 
			$tab_li.removeClass("active"); 
			$panel_active = $(id).addClass("active"); 
			$tab_li = $currLink.parent().addClass("active");
		}
	});
});
/* Tabbed jQuery */