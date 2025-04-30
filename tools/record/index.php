<!-- http://localhost/nikeshulak.github.io/tools/record/index.php -->
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/fullpage.min.css" integrity="sha512-A7Hgc495WYRjDFNdIQ2B0eths46do08SH9bUocyn8cKl09HAq7kHJ9t+BA0tFH1qgTg+lI/mXPfgocdknvk3PQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
  <link href="./css/fullpage.min.css" rel="stylesheet">

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
  font-size: 34px; /* 32px */
  line-height: 44px; /* 44px */
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
    padding-right: 60px;
    width: 100%;
}
.slide {
    flex-direction: row;
    align-items: flex-end;
}
.section {
    flex-direction: row;
    align-items: end;
    padding-bottom: 140px;
    justify-content: start;
}
.fp-watermark {
    display: none;
}
.d-none {
  display: none;
}

body {
    /* pexels-paperpeacock-1585716.jpg */
    background: url('http://localhost/archive/images/tiktok-cover.jpg') center -70px;
    background-size: cover;
}
.section {
/*    background: rgba(0, 0, 0, 0.4);*/
}

/* for tiktok screenshot */
body.cover .slide-wrap {
    font-size: 57px;
    line-height: 74px;
    padding-top: 120px;
    padding-right: 20px;
}
body.cover .section {
    padding-bottom: 0;
}
body.cover .slide {
    align-items: center;
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
.full-video {
    position: absolute;
    top: 100px;
    left: 0;
    padding: 20px;
    width: 405px;
    right: 0;
    font-size: 26px;
    font-weight: 500;
    z-index: 9;
    line-height: 32px;
}
.full-video-profile img {
    width: 70px;
    border-radius: 50%;
    height: 70px;
    float: left;
    margin-right: 16px;
    border: 3px solid #fff;
}

.chapter {
    background: #bf0000;
    z-index: 999;
    position: fixed;
    left: 0;
    padding: 4px 16px;
    display: none;
}
  </style>
</head>

<body class="cover-" style="background-color: #000;">
  <div class="full-video d-none">
    <div style="margin-bottom: 10px">Full Video on YouTube</div>
    <div class="full-video-profile">
      <img src="../../images/nikesh-youtube-profile.jpg" alt="" />
      <div style="padding-top: 5px;">
        Nikesh Ulak<br />
        youtube.com/nikeshulak
      </div>
    </div>    
  </div>

  <?php
    // include('./data.php'); 
    $page = isset($_GET['page']) ? $_GET['page'] : "01-091-93";
    include("./data/ktkg/$page.php"); // $data - replaced all ? with ।
  ?>

  <div>
    <style>
      #video {
        position: absolute;
/*        z-index: 1;*/
        width: 100%;
        margin-top: 170px;
      }
    </style>
    <video id="video" controls autoplay muted loop>
      <source src="../../../videos/archive/nature/2516849-sd_640_360_25fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div id="audio-wrap" class="d-none">
    <audio id="audio" controls> <!-- autoplay preload="none" -->
      <source src="../../../videos/kan-thore-kankar-ghane/cut/<?php echo $page;?>.mp4" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>
  </div>

  <div class="chapter">Chapter <?php echo $page;?>: कौन लुटेरा है, कौन मार्गदर्शक है!</div>
  
  <div id="fullpage">
  <?php 
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // $dataJoined = join(" ", $data);
    $dataReplace = preg_replace('/\!/sU', '!।', $data);
    $dataReplaceA = preg_replace('/\?/sU', '?।', $dataReplace);
    $dataReplaceB = preg_replace('/\:/sU', ':।', $dataReplaceA);
    $dataReplaceC = preg_replace('/\;/sU', ';।', $dataReplaceB);
    $dataReplaceD = preg_replace('/\*(.+)\*/sU', '<strong>$1</strong>', $dataReplaceC);

    $dataExplode = explode("।", $dataReplaceD); // $dataJoined

    echo '<div class="section">';
      foreach ($dataExplode as $key => $value) {
        if($value) {
          echo '<div class="slide">';
            echo '<div class="slide-wrap">';
              echo $value; 
              echo (substr($value, -1) == "!" || substr($value, -1) == "?" || substr($value, -1) == ":" || substr($value, -1) == ";") ? "" : "।"; // explode garda । harayo
              // if there is ? at the last character, don't add ।
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


  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
  <script src="../../books/maha-geeta/js/jquery.min.js"></script>

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/vendors/easings.min.js" integrity="sha512-SrKslwu6IjHEo/8mAOtkoUOT3MzHCEOFWktrC8BNtjPuBBYLYjg1y/Marat34uYfOfxDMLEwy8DLArWEVc2i+w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.25/fullpage.extensions.min.js" integrity="sha512-CG4suntOelKyziz99VyC3BrbQ60IOtpJ9RYQvI/0d6TdYWStN69gCb9OpPMlym+3OmNAr357Kv6FVqTk25Ej5Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
  
  <script src="./js/easings.min.js"></script>
  <script src="./js/fullpage.extensions.min.js"></script>

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
      // audioPlay();

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
        
        fadingEffect: true,
		    // fadingEffectKey: 'NDhZV3gyWVhKdmRISnBaMjh1WTI5dDlFX3IwOVptRmthVzVuUldabVpXTjA0blM='
      });

      //methods
      $.fn.fullpage.setAllowScrolling(false);
    });
  </script>
</body>

</html>