'use strict';

$(document).ready(function() {
	console.log('moose');
	displayLists();
})

function displayLists() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.add').css('top', headerHeight);
	$('.add-form').css('top', headerHeight + $('.add').height());
	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 

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

function displayList() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.add').css('top', headerHeight);
	$('.add-form').css('top', headerHeight + $('.add').height());
	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 

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

	$('.item-element').click(function() {
		if ($(this).is('.todo')) {
			$(this).removeClass('todo').addClass('done');
			$(this).find('.status').text('done');
		}
		else {
			$(this).removeClass('done').addClass('todo');
			$(this).find('.status').text('todo');
		}
	});
}
