<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style>
	</style>
</head>
<body>
Search: अष्टावक्र कहते

<!-- <div class="vc_acf vc_txt_align_left -->

<!--
	https://oshoworld.com/maha-geeta-by-osho-01-91/ 
	https://oshoworld.com/maha-geeta-01/ 
-->
<?php
	// generate curl requests
	/*for($i=11; $i<=91; $i++) {
		echo 'curl -o '.$i.'.html https://oshoworld.com/maha-geeta-'.$i.'/<br />';
	}*/

	$file = isset($_GET['file']) ? $_GET['file'] : '01';
	include('file/'.$file.'.html');
?>

</body>
</html>