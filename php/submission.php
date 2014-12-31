<?php
//ini_set('display_errors', 0);
header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Pragma: no-cache");

$email	= trim(htmlspecialchars($_REQUEST["email"]));


$pfileName	= "users-mail.txt";
$MyFile 	= fopen($pfileName, "a");
$nline="\"".$email."\""	."\r\n";
fwrite($MyFile, $nline);
fclose($MyFile);
die;

?>
	