<?php
	/* zaglavlje koje šaljemo klijentu -> format koji šaljemo klijentu */
	header('Content-type:application/json;charset=utf-8');
	/* uključivanje datoteke s definicijom klase za rad s bazom */
	include "database.php";
	/* kreiranje objekta iz klase */
	$baza = new Baza();
	/* definicija upita */
	$upit = "SELECT objava.objava_id, naslov_objave, date_format( datum_objavljivanja_objave,'%d.%m.%Y') as ' datum_objavljivanja_objave', url_slike, korisnik.korisnik_id FROM objava INNER JOIN fotografije_objava ON objava.objava_id = fotografije_objava.objava_id INNER JOIN korisnik ON objava.korisnik_id = korisnik.korisnik_id WHERE fotografija_objava_id % 2 = 1;";
	/* slanje upita bazi pomoću metode objekta $baza */
	$rezultat = $baza->dohvatiDB($upit);

	/* ugradnja dohvaćenih podataka u željeni JSON format */
	
	$myArr = [];
	while($red = $rezultat->fetch_array()){
		$myObj = new stdClass();
		$myObj->objavaId = $red["objava_id"];
		$myObj->naslovObjave = $red["naslov_objave"];
		$myObj->datumObjavljivanjaObjave = $red["datum_objavljivanja_objave"];
		$myObj->urlSlike = $red["url_slike"];
		$myObj->korisnikId = $red["korisnik_id"];
		
		array_push($myArr, $myObj);
	}
	$myJSON = json_encode($myArr);
	echo $myJSON;
?>