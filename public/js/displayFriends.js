function displayFriends() {
	var getURL = "/friends/all";
	$.get(getURL, displayFriendsCallback);
}

function displayFriendsCallback(result) {
	var header ='	<div class="menu-left col-xs-2"></div>	' +
							'	<div class="menu-center col-xs-8">	' +
							'		<h1 class="title">friends</h1>	' +
							'	</div>	' +
							'	<div href="#" class="menu-right col-xs-2">edit</div>';
	var headerTemplate = Handlebars.compile(header);
	var headerHTML = headerTemplate(result);
	$('header').html(headerHTML);

	var main = 	'	<div class="add-form">	' +
							'		<form id="addFriendForm" role="form" method="get" action="/friends/edit/friendAdd" class="container">	' +
 						  '  		<label for="description">First Name:</label>	' +
							'  		<input type="text" class="form-control" id="firstname" placeholder="first name" name="firstname">	' +
  						'  		<label for="description">Last Name:</label> ' +
							'  		<input type="text" class="form-control" id="lastname" placeholder="last name" name="lastname">	' +
  						'  		<label for="description">Email:</label> ' +
							'  		<input type="text" class="form-control" id="email" placeholder="email" name="email">	' +
							'			</br>	' +
							'			<input type="submit" id="submitBtn" class="btn btn-success" value="Add friend"></input>	' +
							'		</form>	' +
							'	</div>	' +
							'	<div class="add">	' +
							'		+	' +
							'	</div>	' +
							'	{{#each friends}}	' +
							'	<div class="element list-element row col-xs-12">	' +
							'		<div class="info col-xs-9" id="{{first-name}}{{last-name}}">	' +
							'			<text class="list-name">{{first-name}} {{last-name}}</text>	' +
							'			<text class="list-description">{{email}}</text>	' +
							'		</div>	' +
							'		<div class="edit edit-list col-xs-3">	' +
							'			<div class="delete delete-{{name}}"><a href="/friends/edit/friendDelete/{{first-name}}/{{last-name}}">delete</a></div>	' +
							'		</div>	' +
							'	</div>	' +
							'	{{/each}}';
	var mainTemplate = Handlebars.compile(main);
	var mainHTML = mainTemplate(result);
	$('.main').html(mainHTML);

	displayFriendsJQuery();
}

function displayFriendsJQuery() {	
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
}
