'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
var currentTab = "lists";
var currentList = "none";

function initializePage() {
	console.log("Javascript connected!");
	displayAll();
	$(".list-all .list-obj").click(displayList);
	$(".tab-icon").click(changeTab);
}

function changeTab(e) {
	var nextTab = $(this).attr("id");
	nextTab = nextTab.substring(0, nextTab.length - 5);
	//console.log(currentTab + ", " + nextTab);
	if (nextTab != currentTab) {
		//console.log("changing tabs");

		$("#" + currentTab + "-icon").removeClass("selected");
		$("#" + nextTab + "-icon").addClass("selected");

		currentTab = nextTab;

		if (currentTab == "lists") {
			displayAll();
		}
		else if (currentTab == "friends") {
			displayFriends();
		}
	}
}

function displayAll(e) {
	//console.log("displayAll");
	if (e != undefined)
		e.preventDefault();
	
	var getURL = "/list/all";
	$.get(getURL, displayAllCallback);
}

function displayAllCallback(result) {
	//console.log("displayAllCallback");
	var allHTML = '<ul class="list-area list-all" id="lists"> \
								 	{{#each lists}} \
										<li class="list-obj row container" id="{{name}}"> \
											<a href="#" class="list-link" id="{{name}}">> \
												<text class="col-xs-10">{{name}}</text> \
												<text class="description col-xs-10">{{description}}</text> \
												<text class="members col-xs-10">{{members}}</text> \
											</a> \
											<a href="/list/edit/listDelete/{{name}}" class="delete delete-{{name}}"> \
												delete \
											</a> \
										</li> \
									{{/each}} \
								</ul>'
	var template = Handlebars.compile(allHTML);
	var html = template(result);
	html += '<form id="addListForm" role="form" method="get" action="/list/edit/listAdd"> \
     	 		<label for="description">Name:</label> \
	     		<input type="text" class="form-control" id="name" placeholder="name" name="name"> \
      		<label for="description">Description:</label> \
	     		<input type="text" class="form-control" id="description" placeholder="Description" name="description"> \
      		<label for="description">Members:</label> \
	     		<input type="text" class="form-control" id="members" placeholder="members" name="members"> \
					<input type="submit" id="submitBtn" class="btn btn-default" value="Add the list"></input> \
				  </form>'


	$('.tab').html(html);
	$(".list-all .list-obj .list-link").click(displayList);
}

function displayList(e) {
	//console.log("displayList");
	e.preventDefault();

	var getURL = "/list/contents/" + $(this).attr("id");
	currentList = $(this).attr("id");
	$.get(getURL, displayListCallback);
}

function displayListCallback(result) {
	var itemHTML = '<li class="list-obj row container checked-{{complete}}" id=' + currentList + '{{name}}> \
									  <a href="#" class="checkbox col-xs-8"> \
									    <text class="col-xs-6">{{name}}</text> \
									    <text class="quantity col-xs-4">{{quantity}}</text> \
									    <span class="glyphicon glyphicon-unchecked col-xs-2"></span> \
								   	</a> \
										</li> \
										<li> \
										<a href="/list/edit/itemDelete/' + currentList + '/{{name}}" class="delete-{{name}} col-xs-2"> \
											remove \
										</a> \
										</li>'

	var template = Handlebars.compile(itemHTML);
	var html = '<ul class="list-area list-all" id="lists">';
	for (var item in result) {
		var obj = result[item];
		html += template(obj);
	}
	html += "	</ul>"
	html += '<form id="addItemForm" role="form" method="get" action="/list/edit/itemAdd/' + currentList + '"> \
    	 		 	<label for="name">Name:</label> \
	     		 	<input type="text" class="form-control" id="name" placeholder="name" name="name"> \
      			<label for="quantity">Quantity:</label> \
	     			<input type="text" class="form-control" id="quantity" placeholder="quantity" name="quantity"> \
						<input type="submit" id="submitBtn" class="btn btn-default" value="Add the item"></input> \
					 </form>';

	

	$('.tab').html(html);
	//console.log("reached");
	$(".checked-false").click(toggleCheck);
	$(".checked-true").click(toggleCheck);
	$(".left-nav").click(displayAll);
	$(".checked-true .glyphicon").removeClass("glyphicon-unchecked").addClass("glyphicon-ok");
}

function displayFriends(e) {
	//e.preventDefault();

	var getURL = "/friends/all"
	$.get(getURL, displayFriendsCallback);
}

function displayFriendsCallback(result) {
	var friendsHTML = '<ul class="list-area list-all" id="lists"> \
								 			{{#each friends}} \
												<li class="list-obj row container" id="{{first-name}}"> \
													<a href="#" class="list-el"> \
														<text class="col-xs-10">{{first-name}} {{last-name}}</text> \
														<text class="description col-xs-10">{{photo}}</text> \
														<text class="members col-xs-10">{{email}}</text> \
													</a> \
												</li> \
											{{/each}} \
										</ul>'

	var template = Handlebars.compile(friendsHTML);
	var html = template(result);

	$('.tab').html(html);
}

function toggleCheck(e) {
	e.preventDefault();
	if ($(this).is(".checked-false")) {
		$(this).removeClass("checked-false").addClass("checked-true");
		$(this).find(".glyphicon-unchecked").removeClass("glyphicon-unchecked").addClass("glyphicon-ok");
	}
	else {
		$(this).removeClass("checked-true").addClass("checked-false");
		$(this).find(".glyphicon-ok").removeClass("glyphicon-ok").addClass("glyphicon-unchecked");
	}
}


