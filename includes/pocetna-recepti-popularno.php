<?php
	/* zaglavlje koje šaljemo klijentu -> format koji šaljemo klijentu */
	header('Content-type:application/json;charset=utf-8');
	/* uključivanje datoteke s definicijom klase za rad s bazom */
	include "database.php";
	/* kreiranje objekta iz klase */
	$baza = new Baza();
	/* definicija upita */
	$upit = "SELECT recept.recept_id, naslov_recepta, naziv_slike, url_slike, vrijeme_pripreme, ime_prezime, slika_korisnika_krug FROM recept INNER JOIN korisnik ON recept.korisnik_id = korisnik.korisnik_id INNER JOIN fotografije_recept ON recept.recept_id = fotografije_recept.recept_id WHERE recept.recept_id BETWEEN 7 AND 9 AND fotografije_recept.fotografija_recept_id % 3 = 1;";
	/* slanje upita bazi pomoću metode objekta $baza */
	$rezultat = $baza->dohvatiDB($upit);

	/* ugradnja dohvaćenih podataka u željeni JSON format */
	
	$myArr = [];
	while($red = $rezultat->fetch_array()){
		$myObj = new stdClass();
		$myObj->receptId = $red["recept_id"];
		$myObj->naslovRecepta = $red["naslov_recepta"];
		$myObj->nazivSlike = $red["naziv_slike"];
		$myObj->urlSlike = $red["url_slike"];
		$myObj->vrijemePripreme = $red["vrijeme_pripreme"];
		$myObj->imePrezime = $red["ime_prezime"];
		$myObj->slikaKorisnikaKrug = $red["slika_korisnika_krug"];
		
		array_push($myArr, $myObj);
	}
	$myJSON = json_encode($myArr);
	echo $myJSON;
?>