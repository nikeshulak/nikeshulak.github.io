<?php
$type = isset($_GET["type"]) ? $_GET["type"] : "remove-lines"; // html, mp3
echo "sudo chmod u+x shell.sh<br>";

if($type == "mp3") {
  for($i = 1; $i <= 54; $i++) {
    $file = $i <= 9 ? sprintf("%02d", $i) : $i;
    echo "wget https://oshoworld.com/wp-content/uploads/2020/11/Hindi%20Audio/OSHO-Mahaveer_Vani_$file.mp3<br>";
  }
}
else if($type == "html") {
  for($i = 1; $i <= 54; $i++) {
    $file = $i <= 9 ? sprintf("%02d", $i) : $i;
    echo "curl -o $file.html https://oshoworld.com/mahaveer-vani-$file/<br>";
  }
}
else {
  for($i = 1; $i <= 54; $i++) {
    $file = $i <= 9 ? sprintf("%02d", $i) : $i;
    // echo "sed -i '1,432d' *.html<br>"; // remove 1 to 432 lines
    // echo "sed -i '2,\$d' *.html<br>"; // remove 2 to last lines
  }

  $fileArr = ['08', '09', '12', '13', '14', '15', '16', '17', '18', '19', '20', '23', '31', '33'];
  // // content being deleted: search for <br><hr></div></div></div></div></div> - 08, 09, 12 to 20, 23, 31, 33
  foreach ($fileArr as $value) {
    // echo "mv $value.html ../remaining<br>";
    // echo "sed -i '1,431d' *.html<br>"; // remove 1 to 431 lines
    echo "sed -i '2,\$d' *.html<br>"; // remove 2 to last lines
  }  
}
?>