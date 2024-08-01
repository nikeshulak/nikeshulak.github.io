<?php
$type = isset($_GET["type"]) ? $_GET["type"] : "remove-lines"; // html, mp3

echo "sudo chmod u+x shell.sh<br><br>";

if($type == "mp3") {
  for($i = 1; $i <= 30; $i++) {
    $file = $i <= 9 ? sprintf("%02d", $i) : $i; // for 01
    
    // $file = ($i).toString().padStart(3, "0"); //javascript

    // $file = str_pad($i, 3, "0", STR_PAD_LEFT); // for 001

    // echo "rm OSHO-Es_Dhammo_Sanantano_$file.mp3<br>"; // to remove from server partially
    echo "wget https://oshoworld.com/wp-content/uploads/2020/11/English%20Audio/OSHO-Beyond_Enlightenment_$file.mp3<br>";
  }
}
else if($type == "html") {
  for($i = 1; $i <= 30; $i++) {
    $file = $i <= 9 ? sprintf("%02d", $i) : $i;
    // echo "curl -o $file.html https://oshoworld.com/beyond-enlightenment-$file/<br>"; // Please wait while your request is being verified...

    echo "touch $file.html<br>";
  }
}
else {
  // for($i = 1; $i <= 54; $i++) {
  //   $file = $i <= 9 ? sprintf("%02d", $i) : $i;
  //   // echo "sed -i '1,432d' *.html<br>"; // remove 1 to 432 lines
  //   // echo "sed -i '2,\$d' *.html<br>"; // remove 2 to last lines
  // }

  $fileArr = [10, 104, 111, 116, 117, 118, 119, 120, 121, 122, 24, 30, 37, 41, 70];
  // // content being deleted: search for <br><hr></div></div></div></div></div> - 08, 09, 12 to 20, 23, 31, 33
  foreach ($fileArr as $value) {
    // echo "rm $value.html<br>"; // from file folder
    // echo "cp $value.html ../remaining<br>"; // from file-copy folder
    echo "mv $value.html ../file<br>"; // from remaining folder
  }
  
  # remove lines
  echo "<br>sed -i '1,431d' *.html // remove 1 to 431 lines<br>";
  echo "<br>sed -i '2,\$d' *.html // remove 2 to last lines<br>";

  echo "<br>scp atlaskode:/var/www/html/atlaskode/archive/mp3/*.mp3 .";

  // replace <br> to <br><br>
  // replace <br><br><br><br> to <br><br>

  // folder separated as 82 files wota maa matra replace garna milne dekhayo.. - so half half gareko..
}
?>