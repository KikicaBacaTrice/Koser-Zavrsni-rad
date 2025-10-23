<?php
	/* zaglavlje koje šaljemo klijentu -> format koji šaljemo klijentu */
	header('Content-type:application/json;charset=utf-8');
	/* uključivanje datoteke s definicijom klase za rad s bazom */
	include "database.php";
	/* kreiranje objekta iz klase */
	$baza = new Baza();
	/* definicija upita */
	$upit = "SELECT korisnik_id, ime_prezime, slika_korisnika_bez_pozadine, slika_korisnika_krug, opis_korisnika from korisnik;";
	/* slanje upita bazi pomoću metode objekta $baza */
	$rezultat = $baza->dohvatiDB($upit);

	/* ugradnja dohvaćenih podataka u željeni JSON format */
	
	$myArr = [];
	while($red = $rezultat->fetch_array()){
		$myObj = new stdClass();
		$myObj->korisnikId = $red["korisnik_id"];
		$myObj->imePrezime = $red["ime_prezime"];
		$myObj->slikaKorisnikaBezPozadine = $red["slika_korisnika_bez_pozadine"];
		$myObj->slikaKorisnikaKrug = $red["slika_korisnika_krug"];
		$myObj->opisKorisnika = $red["opis_korisnika"];
		
		array_push($myArr, $myObj);
	}
	$myJSON = json_encode($myArr);
	echo $myJSON;
?>