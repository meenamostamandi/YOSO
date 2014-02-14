'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
var currentTab = "lists";

function initializePage() {
	console.log("Javascript connected!");
	$(".list-all .list-obj").click(displayList);
	$(".left-nav").click(displayAll);

	$(".todo").click(toggleCheck);
	$(".checked").click(toggleCheck);

	$(".tab").hide();
	$("#lists-tab").show();
	$(".tab-icon").click(changeTab);

	$(".right-nav").click(showForm);
	$(".edit").click(showDelete);
}

function showDelete(e) {
	console.log("moose");
	$(".delete-button").toggle();
}

function showForm(e) {
  $('#myModal').modal('toggle');
}

function displayList(e) {
	e.preventDefault();
	console.log($(this).attr("id"));
	console.log($(this).attr("id") + "-contents");
	$(".list-area").hide();
	$("#" + String($(this).attr("id")) + "-contents").show();
}

function displayFriend(e) {
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

function toggleCheck(e) {
	if ($(this).is(".todo")) {
		$(this).removeClass("todo").addClass("checked");
		$(this).find(".glyphicon-unchecked").removeClass("glyphicon-unchecked").addClass("glyphicon-ok");
	}
	else {
		$(this).removeClass("checked").addClass("todo");
		$(this).find(".glyphicon-ok").removeClass("glyphicon-ok").addClass("glyphicon-unchecked");
	}
}

function changeTab(e) {
	var nextTab = $(this).attr("id");
	nextTab = nextTab.substring(0, nextTab.length - 5);
	console.log(currentTab + ", " + nextTab);
	if (nextTab != currentTab) {
		console.log("changing tabs");

		$("#" + currentTab + "-icon").removeClass("selected");
		$("#" + nextTab + "-icon").addClass("selected");

		$("#" + currentTab + "-tab").hide();
		$("#" + nextTab + "-tab").show();

		currentTab = nextTab;
	}
}
