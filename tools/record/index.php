<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/fullpage.min.css" integrity="sha512-A7Hgc495WYRjDFNdIQ2B0eths46do08SH9bUocyn8cKl09HAq7kHJ9t+BA0tFH1qgTg+lI/mXPfgocdknvk3PQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/vendors/easings.min.js" integrity="sha512-SrKslwu6IjHEo/8mAOtkoUOT3MzHCEOFWktrC8BNtjPuBBYLYjg1y/Marat34uYfOfxDMLEwy8DLArWEVc2i+w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/fullpage.min.js" integrity="sha512-rc+ezQrlvTWQ1bOJtmCN7Fm/GyfhIBX9eOZhbQ7BtSpnG8SgrafIjsl0jWh0a/zLsLj8wbzv2+vkAyZtYn7xwg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/fullpage.extensions.min.js" integrity="sha512-CG4suntOelKyziz99VyC3BrbQ60IOtpJ9RYQvI/0d6TdYWStN69gCb9OpPMlym+3OmNAr357Kv6FVqTk25Ej5Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;500&display=swap');
body {
  background: #000;
  color: #fff;
  font-family: 'Mukta';
  /* for tiktok cover
  font-size: 60px; 
  line-height: 74px;
  */
  font-size: 40px; /* 32px */
  line-height: 54px; /* 44px */
  /* font-size: 44px;
  line-height: 50px; */

  /* align-items: center;
  display: flex; */
}
.section {
  /* padding: 10px 20px; */
}
.fp-arrow {
    display: none !important;
}
.slide-wrap {
    padding-left: 20px;
    padding-right: 80px;
    width: 100%;
}
.slide {
    flex-direction: row;
    align-items: flex-end;
}
.section {
    flex-direction: row;
    align-items: end;
    padding-bottom: 120px;
    justify-content: start;
}
.fp-watermark {
    display: none;
}
.d-none {
  display: none;
}

body {
    background: url('http://localhost/archive/images/pexels-paperpeacock-1585716.jpg') center;
    background-size: cover;
}
.section {
    background: rgba(0, 0, 0, 0.4);
}

/*
for youtube screenshot
.section span {
    position: absolute;
    left: 0;
    padding: 20px 40px;
    font-size: 140px;
    line-height: 110px;
}
small {
    display: block;
    font-size: 98px;
    margin-top: 30px;
    width: 100%;
    color: antiquewhite;
}
*/
  </style>
</head>

<body>
  <div id="audio-wrap" class="d-none">
    <audio id="audio" controls preload="none">
      <source src="../../../videos/es-dhammo-sanantano/018/018-29-53-to-48-40.mp3" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>
  </div>
  
  <div id="fullpage">
  <?php 
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // include('./data.php'); 
    include('./data/018-29-53-to-48-40.php'); // $data - replaced all ? with ।

    // $dataJoined = join(" ", $data);
    $dataExplode = explode("।", $data); // $dataJoined

    echo '<div class="section">';
      foreach ($dataExplode as $key => $value) {
        if($value) {
          echo '<div class="slide">';
            echo '<div class="slide-wrap">';
              echo $value . "।"; // explode garda । harayo
            echo '</div>';
          echo '</div>';
        }
      }
    echo '</div>';

      // echo '<div class="section">';
    //   echo $data[$index];
    // echo '</div>';
    
    // echo '<div class="section">';
    //   echo $data[39];
    // echo '</div>';
  ?>
  </div>

  <script>
    function audioPlay() {
      var audio = document.getElementById('audio');   
      $('body').addClass('playing');

      audio.play();
      $('#pause-btn').text('Pause');
    }

    // keyboard event 
    window.addEventListener(
      "keydown",
      (event) => {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }

        switch (event.key) {
          case "p":
            // $('#prev-btn').trigger('click');
            
            // $('#pause-btn').trigger('click');
            audioPlay();
            break;

          default:
            return; // Quit when this doesn't handle the key event.
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      },
      true
    );

    $(document).ready(function() {
      $('#fullpage').fullpage({
        licenseKey: 'gplv3-license',
        //options here
        scrollingSpeed: 400,
        // autoScrolling:true,
        // fitToSection: true,
        // scrollBar: false,
        // scrollHorizontally: true,
        scrollOverflow: false,
        fadingEffect: true,

        slidesNavigation: false,
        loopHorizontal: false,
      });

      //methods
      $.fn.fullpage.setAllowScrolling(false);
    });
  </script>
</body>

</html>