'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".todo").click(toggleCheck);
	$(".checked").click(toggleCheck);
}

function toggleCheck(e) {
	if ($(this).is(".todo")) {
		$(this).removeClass("todo").addClass("checked");
		$(this).find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-ok");
	}
	else {
		$(this).removeClass("checked").addClass("todo");
		$(this).find(".glyphicon-ok").removeClass("glyphicon-ok").addClass("glyphicon-minus");
	}
}


