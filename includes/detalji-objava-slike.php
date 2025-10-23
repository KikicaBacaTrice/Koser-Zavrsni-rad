<?php
	/* zaglavlje koje šaljemo klijentu -> format koji šaljemo klijentu */
	header('Content-type:application/json;charset=utf-8');
	/* uključivanje datoteke s definicijom klase za rad s bazom */
	include "database.php";
	/* kreiranje objekta iz klase */
	$baza = new Baza();
	/* definicija upita */
	$upit = "SELECT objava_id, naziv_slike, url_slike FROM fotografije_objava WHERE fotografija_objava_id % 2 = 1;";
	/* slanje upita bazi pomoću metode objekta $baza */
	$rezultat = $baza->dohvatiDB($upit);

	/* ugradnja dohvaćenih podataka u željeni JSON format */
	
	$myArr = [];
	while($red = $rezultat->fetch_array()){
		$myObj = new stdClass();
		$myObj->objavaId = $red["objava_id"];
		$myObj->nazivSlike = $red["naziv_slike"];
		$myObj->urlSlike = $red["url_slike"];
		
		array_push($myArr, $myObj);
	}
	$myJSON = json_encode($myArr);
	echo $myJSON;
?>