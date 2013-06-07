jQuery(document).ready(function(){ 
var scopedVariable;
var number = Math.floor(Math.random()*11);
function numberCheck(submitButton) {
$(submitButton).closest('#outsideContainer').find('.hotter').addClass('hideStuff');
 $(submitButton).closest('#outsideContainer').find('.colder').addClass('hideStuff');
var guess = $(submitButton).closest('#guessContainer').find('.value').val();
	if( +guess === number)
	{
    $(submitButton).closest('#outsideContainer').find('.gotIt').removeClass('hideStuff');
	}
    else {
		$(submitButton).closest('#guessContainer').find('.value').val('Please guess again');
		if(Math.abs(guess - number) < Math.abs(scopedVariable - number)) {
			$(submitButton).closest('#outsideContainer').find('.hotter').removeClass('hideStuff');
			}
		else if(Math.abs(guess - number) > Math.abs(scopedVariable - number)) {
			$(submitButton).closest('#outsideContainer').find('.colder').removeClass('hideStuff');
			}
		scopedVariable = guess;
		} 
	
		
}

$('.query').on('click', function() {
	numberCheck(this);
	}); 
$('.reset').on('click', function() {
  location.reload(true);
  
  });
  $('.value').on('click', function() {
  $(this).val(" ");
  });
 });