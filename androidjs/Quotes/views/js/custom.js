// var apiUrl = "https://nikesh.tiiny.site/quotes.json"; // for: yarn build
// var apiUrl = "data/quotes.json"; // local
var apiUrl = "http://192.168.137.1/nikeshulak.github.io/androidjs/Quotes/views/data/quotes.php"; // local

// var videoLocation = '/videos/osho/shorts';
var videoLocation = 'file:///storage/emulated/0/Download';

$(document).ready(function(){

  // for videos.html
  $(".audio-download").click(function() {
    console.log('filename', $(this).attr('filename'));
  })

  $("#console").append(`<br>API URL: ${apiUrl}`);

  $("#menu-content").html(`
    <a href="./index.html" class="button">Home</a> <br />
    <a href="./videos.html" class="button">Videos</a> <br />
    <a href="./videos-list.html" class="button">Videos Download</a> <br />
    <a href="./submit-quotes.html" class="button">Submit quotes</a> <br />
    <a href="https://onelink.to/kf3mtj" class="button">Live APK</a> <br />`);

  $("#debug").click(function(){
    $("#console").toggle();
  })
  $("#menu").click(function(){
    $("#menu-content").toggle();
  })

  $('#pause-btn').click(function() {  
    // $this = $(this);

    togglePause();
  })

  function togglePause() {
    // console.log($('body'))
    var $body = $('body');

    // $this.toggleClass('playing'); // paused
    $body.toggleClass('playing');

    var audio = document.getElementById('audio');

    if($body.hasClass('playing')) {
      audio.play();
      $('#pause-btn').text('Pause');
    }
    else {
      audio.pause();
      $('#pause-btn').text('Play')

      var seconds = audio.currentTime;
      getCurrentTime(audio.currentTime);;
    }
  }

  function arrayToHtmlSource(result) {
    console.log('result', result)
    $.each(result, function(i, field){
      // console.log('field', field.text)

      if(!field.disabled) {
        $("#source-list ul").append(`<li>${field.source}</li>`)
      }

    });

    $("#source-list ul").append(`<li>favourites</li>`)

    
    // clicking each source li
    $("#source-list li").click(function() {
      var source = $(this).text();

      $(".source").hide();
      $(".source."+source).show();
    })

  }

  function arrayToHtml(result) {
    var dist = result?.data?.quotes?.filter((obj, index, self) =>
      index === self.findIndex((t) => t.source === obj.source)
    );
  
    // console.log(dist);
    $("#source-list ul").html('');
    arrayToHtmlSource(dist);

    var favourites = localStorage.getItem("quotesFavourites");
    var favArr = JSON.parse(favourites);

    // console.log('favArr', favArr)
    // $("#console").text('favourites: ' + favourites);

    $.each(result?.data?.quotes, function(i, field){
      // console.log('field', field)

      if(!field.disabled) {
        if(field.type === "mp3") {
          $("#quotes").append(`<audio id="audio" controls preload="none">
            <source src="${field.text}" type="audio/mpeg">
            Your browser does not support the audio tag.
          </audio>`);
        }
        else {

          if(favArr?.includes( String(field.id) )) {
            $("#quotes").append(`<label class="source ${field.source} favourites">
              <input type="checkbox" value="${field.id}" checked />
              ${field.text}</label>
            `);
          }
          else {
            $("#quotes").append(`<label class="source ${field.source}">
              <input type="checkbox" value="${field.id}" />
              ${field.text}</label>
            `);
          }

        }

      }

    });
    

    $("#quotes input").change(function() {
      console.log('changed', this.value);
      if($(this).is(":checked")) {
        $(this).parent().addClass('favourites');

        // save to local storage
        var favourites = localStorage.getItem("quotesFavourites");
        var arr = JSON.parse(favourites) || [];
        arr.push(this.value);
        localStorage.setItem("quotesFavourites", JSON.stringify(arr));
      } else {
        $(this).parent().removeClass('favourites');

        // save to local storage
        var favourites = localStorage.getItem("quotesFavourites");
        var arr = JSON.parse(favourites);
        arr.splice(arr.indexOf(this.value), 1);
        localStorage.setItem("quotesFavourites", JSON.stringify(arr));
      }
    })
  }

  // videos.html
  function arrayToHtmlVideos(result) {
    $.each(result?.data?.videos, function(i, field){
      // console.log('field', field)

      if(!field.disabled) {
        if(field.type === "mp4") {
          $("#videos-player").append(`
            <div style="margin-bottom: 20px;">
              <span style="margin-bottom: 10px; display: block;">${field.text}</span>
              <video controls width="100%">
                <source src="${videoLocation}/${field.text}#t=0.8" type="video/mp4">
                Your browser does not support the audio tag.
              </video>
            </div>`);
        }
        else {

        }

      }

    });
  }

  function refetchApi() {
    localStorage.removeItem("quotesResult"); // remove to refetch - for mobile devices

    setTimeout(() => {
      $.getJSON(`${apiUrl}`, function(result){
        // console.log('result', result)

        // save to local storage on refetching api
        localStorage.setItem("quotesResult", JSON.stringify(result));

        $("#quotes").html('');
        $("#videos-player").html('');
        page === "quotes" && arrayToHtml(result);
        page === "videos" && arrayToHtmlVideos(result);

      });
    }, 500)
  }

  // if you want to refetch on document load - that will unnecessarily waste bandwidth
  // refetchApi();

  $("#refetch").click(function(){
    
    // $.getJSON("demo_ajax_json.js", function(result){
    //   $.each(result, function(i, field){
    //     // console.log('filed', field)
    //     $("#demo").append(field + " ");
    //   });
    // });

    $(this).text('Refetching...');
    refetchApi();

    setTimeout(() => {
      $(this).text('Refetch');
    }, 1000)

  });


  var quotesResult = localStorage.getItem("quotesResult");
  var result = JSON.parse(quotesResult);
  // console.log("quotesResult", result );
  
  page === "quotes" && arrayToHtml(result);
  page === "videos" && arrayToHtmlVideos(result);
});