<?php
	class Baza{
		/* deklaracija privatnih konstanti s podacima za prijavu na bazu - dostupne samo unutar klase */
		private const SERVER = "localhost";
		private const KORISNICKO_IME = "root";
		private const LOZINKA = "";
		private const BAZA_PODATAKA = "db_zavrsni_recepti";
		
		/* deklaracija privatne metode za povezivanje na bazu - dostupna samo unutar klase */
		private function spojiDB(){
			/* otvaranje konekcije s MySQL sustavom */
			$veza = new mysqli(self::SERVER, self::KORISNICKO_IME, self::LOZINKA, self::BAZA_PODATAKA);
			/* provjera da li je konekcija uspjela */
			if($veza->connect_errno){
				die("Neuspješno povezivanje na bazu: " . $veza->connect_errno . ", " . $veza->connect_error);
			}
			/* postavljanje charset-a */
			$veza->query("set names 'utf8'");
			/* vraćanje objekta koji predstavlja konekciju */
			return $veza;
		}
		
		/* deklaracija javne metode za dohvaćanje podataka iz baze - dostupna iz bilo kojeg dijela programa */
		function dohvatiDB($upit){
			/* povezivanje na bazu pozivom privatne metode spojiDB() */
			$veza = $this->spojiDB();
			/* slanje upita bazi i dohvaćanje njegova rezultata */
			$rezultat = $veza->query($upit);
			/* provjera da li je upit vratio grešku */
			if(!$rezultat){
				die("Greška kod izvršavanja upita: " . $veza->errno . ", " . $veza->error);
			}
			/* zatvaranje konekcije */
			$veza->close();
			/* vraćanje rezultata upita skripti */
			return $rezultat;
		}
		
		/* deklaracija javne metode za ažuriranje podataka baze - dostupna iz bilo kojeg dijela programa */
		function promijeniDB($upit){
			/* povezivanje na bazu pozivom privatne metode spojiDB() */
			$veza = $this->spojiDB();
			/* slanje upita bazi i dohvaćanje njegova rezultata */
			$rezultat = $veza->query($upit);
			/* provjera da li je upit vratio grešku */
			if(!$rezultat){
				die("Greška kod izvršavanja upita: " . $veza->errno . ", " . $veza->error);
			}
			
			/* provjera da li je upit obuhvatio barem jedan red iz baze */
			if($veza->affected_rows != 0){
				/* zatvaranje konekcije */
				$veza->close();
				/* vrati istinu */
				return true;
			}
			else{
				/* zatvaranje konekcije */
				$veza->close();
				/* vrati laž */
				return false;
			}
		}
	}
?>