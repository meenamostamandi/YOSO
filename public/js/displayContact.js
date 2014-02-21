function displayContact() {
	// change header
	$('.title').text('contact');
	$('.menu-right').text('~');

	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 
	$('.main').html('contact');
}
