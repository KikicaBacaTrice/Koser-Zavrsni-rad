<?php
	/* zaglavlje koje šaljemo klijentu -> format koji šaljemo klijentu */
	header('Content-type:application/json;charset=utf-8');
	/* uključivanje datoteke s definicijom klase za rad s bazom */
	include "database.php";
	/* kreiranje objekta iz klase */
	$baza = new Baza();
	/* definicija upita */
	$upit = "SELECT recept.recept_id, naslov_recepta, opis_recepta, sastojci_recepta, vrijeme_pripreme, ocjena, korisnik.korisnik_id, ime_prezime, slika_korisnika_krug, url_slike FROM recept INNER JOIN korisnik ON recept.korisnik_id = korisnik.korisnik_id INNER JOIN fotografije_recept ON recept.recept_id = fotografije_recept.recept_id WHERE fotografija_recept_id % 3 = 2;";
	/* slanje upita bazi pomoću metode objekta $baza */
	$rezultat = $baza->dohvatiDB($upit);

	/* ugradnja dohvaćenih podataka u željeni JSON format */
	
	$myArr = [];
	while($red = $rezultat->fetch_array()){
		$myObj = new stdClass();
		$myObj->receptId = $red["recept_id"];
		$myObj->naslovRecepta = $red["naslov_recepta"];
		$myObj->opisRecepta = $red["opis_recepta"];
		$myObj->sastojciRecepta = json_decode($red["sastojci_recepta"]);
		$myObj->vrijemePripreme = $red["vrijeme_pripreme"];
		$myObj->ocjena = $red["ocjena"];
		$myObj->korisnikId = $red["korisnik_id"];
		$myObj->imePrezime = $red["ime_prezime"];
		$myObj->slikaKorisnikaKrug = $red["slika_korisnika_krug"];
		$myObj->urlSlike = $red["url_slike"];
		
		array_push($myArr, $myObj);
	}
	$myJSON = json_encode($myArr);
	echo $myJSON;
?>