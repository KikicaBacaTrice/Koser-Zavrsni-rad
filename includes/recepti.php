<?php
	/* zaglavlje koje šaljemo klijentu -> format koji šaljemo klijentu */
	header('Content-type:application/json;charset=utf-8');
	/* uključivanje datoteke s definicijom klase za rad s bazom */
	include "database.php";
	/* kreiranje objekta iz klase */
	$baza = new Baza();
	/* definicija upita */
	$upit = "SELECT recept.recept_id, naslov_recepta, vrijeme_pripreme, date_format( datum_objavljivanja_recepta,'%d.%m.%Y') as ' datum_objavljivanja_recepta', url_slike, naziv_kategorije, korisnik.korisnik_id FROM recept INNER JOIN fotografije_recept ON recept.recept_id = fotografije_recept.recept_id INNER JOIN kategorija on recept.kategorija_id = kategorija.kategorija_id INNER JOIN korisnik on recept.korisnik_id = korisnik.korisnik_id WHERE fotografije_recept.fotografija_recept_id % 3 = 1 ORDER BY datum_objavljivanja_recepta;";
	/* slanje upita bazi pomoću metode objekta $baza */
	$rezultat = $baza->dohvatiDB($upit);

	/* ugradnja dohvaćenih podataka u željeni JSON format */
	
	$myArr = [];
	while($red = $rezultat->fetch_array()){
		$myObj = new stdClass();
		$myObj->receptId = $red["recept_id"];
		$myObj->naslovRecepta = $red["naslov_recepta"];
		$myObj->vrijemePripreme = $red["vrijeme_pripreme"];
		$myObj->datumObjavljivanjaRecepta = $red["datum_objavljivanja_recepta"];
		$myObj->urlSlike = $red["url_slike"];
		$myObj->nazivKategorije = $red["naziv_kategorije"];
		$myObj->korisnik_id = $red["korisnik_id"];
		
		array_push($myArr, $myObj);
	}
	$myJSON = json_encode($myArr);
	echo $myJSON;
?>