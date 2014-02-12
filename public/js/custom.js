'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".list-all .list-obj").click(displayList);
	$(".left-nav").click(displayAll);
}

function displayList(e) {
	e.preventDefault();
	console.log($(this).attr("id"));
	console.log($(this).attr("id") + "-contents");
	$(".list-area").hide();
	$("#" + String($(this).attr("id")) + "-contents").show();
}

function displayAll(e) {
	e.preventDefault();
	$(".list-area").hide();
	$(".list-all").show();
}
