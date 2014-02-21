function displayLists(e) {
	var getURL = "/lists/all";
	$.get(getURL, displayListsCallback);
}

function displayListsCallback(result) {
	var header ='	<div class="menu-left col-xs-2"> <!--<span class="glyphicon glyphicon-chevron-left"></span>--> </div>	' +
							'	<div class="menu-center col-xs-8">	' +
							'		<h1 class="title">lists</h1>	' +
							'	</div>	' +
							'	<div href="#" class="menu-right col-xs-2">edit</div>';
	var headerTemplate = Handlebars.compile(header);
	var headerHTML = headerTemplate(result);
	$('header').html(headerHTML);

	var main = 	'	<div class="add-form">	' +
							'		<form id="addListForm" role="form" method="get" action="/list/edit/listAdd" class="container">	' +
 						  '  		<label for="description">Name:</label>	' +
							'  		<input type="text" class="form-control" id="name" placeholder="name" name="name">	' +
  						'  		<label for="description">Description:</label> ' +
	     				'			<input type="text" class="form-control" id="description" placeholder="Description" name="description">	' +
   						'  		<label for="description">Members:</label>	' +
	 					  '  		<input type="text" class="form-control" id="members" placeholder="members" name="members">	' +
							'			</br>	' +
							'			<input type="submit" id="submitBtn" class="btn btn-success" value="Add the list"></input>	' +
							'		</form>	' +
							'	</div>	' +
							'	<div class="add">	' +
							'		+	' +
							'	</div>	' +
							'	{{#each lists}}	' +
							'	<div class="element list-element row col-xs-12">	' +
							'		<div class="info col-xs-9" id="{{name}}">	' +
							'			<text class="list-name">{{name}}</text>	' +
							'			<text class="list-description">{{description}}</text>	' +
							'			<text class="list-members">{{#each members}}{{this}} {{/each}}</text>	' +
							'		</div>	' +
							'		<div class="edit edit-list col-xs-3">	' +
							'			<div class="delete delete-{{name}}"><a href="/list/edit/listDelete/{{name}}">delete</a></div>	' +
							'		</div>	' +
							'	</div>	' +
							'	{{/each}}';
	var mainTemplate = Handlebars.compile(main);
	var mainHTML = mainTemplate(result);
	$('.main').html(mainHTML);
		
	displayListsJQuery();
}

function displayListsJQuery() {	
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	// make sure content fits within middle section
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

	$('.info').click(displayList);
}
