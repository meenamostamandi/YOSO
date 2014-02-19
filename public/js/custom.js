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
}

function displayAll(e) {
	//console.log("displayAll");
	e.preventDefault();
	
	var getURL = "/list/all";
	$.get(getURL, displayAllCallback);
}

function displayAllCallback(result) {
	//console.log("displayAllCallback");
	var allHTML = '<ul class="list-area list-all" id="lists"> \
								 	{{#each lists}} \
										<li class="list-obj row container" id="{{name}}"> \
											<a href="lists.html" class="list-el"> \
												<text class="col-xs-10">{{name}}</text> \
												<text class="description col-xs-10">{{description}}</text> \
												<text class="members col-xs-10">{{members}}</text> \
											</a> \
										</li> \
										<li> \
											<a href="/deleteList/{{name}}" class="delete-button"><span class="glyphicon glyphicon-minus"></span></a> \
										</li> \
									{{/each}} \
								</ul>'
	var template = Handlebars.compile(allHTML);
	var html = template(result);

	$('.tab').html(html);
	$(".list-all .list-obj").click(displayList);
}

function displayList(e) {
	e.preventDefault();

	var getURL = "/list/contents/" + $(this).attr("id");
	$.get(getURL, displayListCallback);
}

function displayListCallback(result) {
	var itemHTML = '<li class="list-obj row container todo"> \
									  <a href="#"> \
									    <text class="col-xs-6">{{name}}</text> \
									    <text class="quantity col-xs-4">{{quantity}}</text> \
									    <span class="glyphicon glyphicon-unchecked col-xs-2"></span> \
								   	</a> \
								  </li>'

	var template = Handlebars.compile(itemHTML);
	var html = '<ul class="list-area list-all" id="lists">';
	for (var item in result) {
		var obj = result[item];
		html += template(obj);
	}
	html += "	</ul>"

	$('.tab').html(html);
	$(".todo").click(toggleCheck);
	$(".checked").click(toggleCheck);
	$(".left-nav").click(displayAll);
}

function toggleCheck(e) {
	e.preventDefault();
	if ($(this).is(".todo")) {
		$(this).removeClass("todo").addClass("checked");
		$(this).find(".glyphicon-unchecked").removeClass("glyphicon-unchecked").addClass("glyphicon-ok");
	}
	else {
		$(this).removeClass("checked").addClass("todo");
		$(this).find(".glyphicon-ok").removeClass("glyphicon-ok").addClass("glyphicon-unchecked");
	}
}


