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
  font-size: 32px;
  line-height: 44px;
  /* align-items: center;
  display: flex; */
}
.section {
  padding: 10px 50px;
}
.fp-watermark {
    display: none;
}
  </style>
</head>

<body>
  <div id="audio-wrap" class="d-none">
    <audio id="audio" controls preload="none">
      <source src="../../../videos/es-dhammo-sanantano/017/017_combined.mp3" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>
  </div>
  
  <div id="fullpage">
  <?php 
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    include('./data.php'); 

    // var_dump($data);
    // $index = $_GET['index'] ?? 38;

    foreach ($data as $key => $value) {
      # code...
      echo '<div class="section">';
        // echo $data[$key];
        echo $value;
      echo '</div>';
    }
    // echo '<div class="section">';
    //   echo $data[$index];
    // echo '</div>';
    
    // echo '<div class="section">';
    //   echo $data[39];
    // echo '</div>';
  ?>
  </div>

  <script>
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
      });

      //methods
      $.fn.fullpage.setAllowScrolling(false);
    });
  </script>
</body>

</html>