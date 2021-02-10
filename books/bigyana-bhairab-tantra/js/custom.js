$(document).ready(function() {
	// hide
	var hideChapters = [1, 2, 3, 4, 5, 6];
	for (var i = hideChapters.length - 1; i >= 0; i--) {
		$('#chapter-'+hideChapters[i]).addClass('d-none');
	}

	$('.section').each(function() {
		var str1 = $(this).html(); 
		if(str1.indexOf("sex") != -1){
		    //console.log("sex" + " found");
			$(this).addClass("text-found");
			// $(this).children('h2').append(" (sex)");
		}

		if(str1.indexOf("love") != -1){
		    //console.log("question" + " found");
			// $(this).addClass("text-found");
			$(this).children('h2').append(" #love,");
		}

		if(str1.indexOf("Question 1") != -1){
		    //console.log("question" + " found");
			// $(this).addClass("text-found");
			$(this).children('h2').append(" #question-1,");
		}

		if(str1.indexOf("first technique") != -1){
		    //console.log("technique" + " found");
			$(this).addClass("text-found");
			$(this).children('h2').append(" #first-technique,");
		}
	});

	$('.section h2').click(function() {
		$(this).parent('.section').toggleClass("active");
		$('body').toggleClass("has-active-section");
		// $(this).children('div').toggleClass("d-block");
	});

});
