
  // use var instead of let
  function goToPredicted(scroll) {
    // console.log('scroll', scroll)
    var audioDuration = document.getElementById('audio').duration;
    // console.log('audioDuration', audioDuration)
    var hasTimeHeight = $('#has-time').height();
    var scrollPercent = scroll/hasTimeHeight*100;
    console.log('scrollPercent', scrollPercent)
    // $('.progress-percent').css('width', scrollPercent + '%');

    // $('#btn-goto-predicted .scrollPercent').text(' - ' + parseFloat(scrollPercent).toFixed(2) + '%')
    
    var secondsPredicted = parseInt(audioDuration*scrollPercent/100);
    // console.log('secondsPredicted', secondsPredicted);

    if(!isNaN(secondsPredicted)) {
      document.getElementById('audio').currentTime = secondsPredicted;  
    }
  }

  jQuery(document).ready(function() {
    jQuery('#btn-goto-predicted').click(function() {
      var scroll = window.scrollY;
      goToPredicted(scroll)
    })

    $('#btn-highlighted-only').click(function() {
      $('body').toggleClass('highlighted-only');
    })
  })