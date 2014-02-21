function displayList(e) {

	var getURL = "/list/contents/" + $(this).attr("id");
	currentList = $(this).attr("id");
	$.get(getURL, displayListCallback);
}

function displayListCallback(result) {
	var header ='	<div class="menu-left col-xs-2">lists</div>	' +
							'	<div class="menu-center col-xs-8">	' +
							'		<h1 class="title">{{name}}</h1>	' +
							'	</div>	' +
							'	<div href="#" class="menu-right col-xs-2">edit</div>';
	var headerTemplate = Handlebars.compile(header);
	var headerHTML = headerTemplate(result);
	$('header').html(headerHTML);

	var main = 	'	<div class="add-form">	' +
							'		<form id="addItemForm" role="form" method="get" action="/list/edit/itemAdd/' + currentList + '">	' +
 					   	'		 	<label for="name">Name:</label>	' +
					    '		 	<input type="text" class="form-control" id="name" placeholder="name" name="name">	' +
  				    '			<label for="quantity">Quantity:</label>	' +
					    '			<input type="text" class="form-control" id="quantity" placeholder="quantity" name="quantity">	; ' +
							'			</br>	' +
							'			<input type="submit" id="submitBtn" class="btn btn-success" value="Add the item"></input>	;	' +
							'	 	</form>	' +
							'	</div>	' +
							'	<div class="add">	' +
							'		+	' +
							'	</div>	' +
							' {{#each contents}}	' +
							'	<div class="element item-element row col-xs-12">	' +
							'		<div class="info col-xs-5">	' +
							'			<text class="list-name">{{name}}</text>	' +
							'		</div>	' +
							'		<div class="quantity col-xs-2">	' +
							'			<div class="">{{quantity}}</div>	' +
							'		</div>	' +
							'		<div class="complete col-xs-2">	' +
							'			<div class="status {{complete}}">{{complete}}</div>	' +
							'		</div>	' +
							'		<div class="edit edit-item col-xs-3">	' +
							'			<div class="delete delete-{{name}}"><a href="/list/edit/itemDelete/' + currentList + '/{{name}}">delete</a></div>	' +
							'		</div>	' +
							'	</div>	' +
							'	{{/each}}';

	var mainTemplate = Handlebars.compile(main);
	var mainHTML = mainTemplate(result);
	$('.main').html(mainHTML);
		
	displayListJQuery();
}

function displayListJQuery() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 

	$('.add').css('top', headerHeight);
	$('.add-form').css('top', headerHeight + $('.add').height());
	$('.edit').css('height', $('.element').height());

	$('.menu-right').click(function() {
		function hideEdit(callback) {
			$('.add-form').hide();
			callback();
		}

		hideEdit(function() {
			$('.add').toggle('slide', {direction: 'up'});
		});
		
		if (parseInt($('.main').css('margin-top')) == headerHeight) {
			$('.main').animate({'margin-top': headerHeight + $('.add').height()});
		} else {
			$('.main').animate({'margin-top': headerHeight});
		}

  	$('.edit').toggle('slide', {direction: 'right'});
		$('.menu-right').text($(this).text() == 'edit' ? 'done' : 'edit');
	});

	$('.add').click(function() {
		$('.add-form').toggle();
	});

	$('.item-element .complete').click(function() {
		if ($(this).find('.status').is('.todo')) {
			$(this).find('.status').removeClass('todo').addClass('done');
			$(this).find('.status').html('done');
		}
		else if($(this).find('.status').is('.done')) {
			$(this).find('.status').removeClass('done').addClass('todo');
			$(this).find('.status').html('todo');
		}
	});
	$('.menu-left').click(displayLists);
}
