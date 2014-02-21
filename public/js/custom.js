'use strict';

var currentTab = "lists";
var currentList = "none";

$(document).ready(function() {
	window.addEventListener("load",function() {
		// Set a timeout...
		setTimeout(function(){
			// Hide the address bar!
			window.scrollTo(0, 1);
		}, 0);
	});

	console.log('moose');

	var getURL = "/tab";
	$.get(getURL, callback);	
	$(".tab-icon").click(changeTab);
})

function callback(result) {
	currentTab = result;
	display(result);
	$(".tab-icon").removeClass("selected");
	$("#" + result + "-icon").addClass("selected");
}

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
console.log("displaying " + tab);
	switch (tab) {
	  case "lists":
			displayLists();
	    break;
		case "list":
			displayList();
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
