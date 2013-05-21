jQuery(document).ready(function(){ 
 $('a').on('click', function(){
    function numberCheck(){
	var promptValue = $(this).closest('#guessContainer').find('.value').val();
	var number = Math.floor(Math.random()*11);
	while(promptValue != number)
	{
    var guess = prompt("Please guess again");
    if(Math.abs(promptValue - number) > Math.abs(guess-number) && guess != number)
		{
      alert("hotter!");
		}
	else if(Math.abs(promptValue - number) < Math.abs(guess-number))
		{
      alert("colder!");
		}
    promptValue = guess;
    };
  alert("Ya got it!");
};

numberCheck();
	});
	}); 
	
	
 