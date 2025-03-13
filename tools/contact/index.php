<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<a href="./index.zip" download>download</a>
<?php
include('./contact.php');

echo "<ol>";
foreach ($contact as $key => $value) {
	echo '<li><a href="tel:'.$key.'">' . $key . '</a>: '.$value.'</li>';
}
echo "</ol>";
?>
<style>
body {
	font-size: 20px;
	padding: 8px;
	font-family: Arial;
}
li {
	margin-bottom: 20px;
}
</style>