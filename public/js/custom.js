'use strict';

var currentTab = "lists";
var currentList = "none";

$(document).ready(function() {
	console.log('moose');
	display(currentTab);
	$(".tab-icon").click(changeTab);
})

function changeTab(e) {
	var nextTab = $(this).attr("id");
	nextTab = nextTab.substring(0, nextTab.length - 5);
	if (nextTab != currentTab) {
		$("#" + currentTab + "-icon").removeClass("selected");
		$("#" + nextTab + "-icon").addClass("selected");

		currentTab = nextTab;
		display(currentTab);
	}
}

function display(tab) {
		switch (currentTab) {
	  case "lists":
			displayLists();
	    break;
		case "list":
			displayList(currentList);
			break;
		case "friends":
			displayFriends();
			break;
		case "checkin":
			displayCheckin();
			break;
		case "contact":
			displayContact();
			break;
		default:
			displayLists();
			break;
	}
}
