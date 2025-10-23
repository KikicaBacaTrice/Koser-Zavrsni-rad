import navigacija from "./moduli/modulNavigacija.js";
import introAnimacija from "./moduli/modulintroAnimacija.js";


document.addEventListener("DOMContentLoaded", () => {
  introAnimacija();

  var sendvic = document.querySelector("#sendvic");

  sendvic.addEventListener("click", navigacija);

  /* KORISNICI/KUHARI */
  /* Dohvćanje podatak iz baze */
  // definicija funkcije za rukovanje podacima
  var rukujPodacimaKorisnici = function (podaci, roditelj) {
    var ispis = "",
      korisnikId,
      imePrezime,
      slikaKorisnikaBezPozadine,
      opisKorisnika;
    for (let i = 0; i < podaci.length; i++) {
      korisnikId = podaci[i].korisnikId;
      imePrezime = podaci[i].imePrezime;
      slikaKorisnikaBezPozadine = podaci[i].slikaKorisnikaBezPozadine;
      opisKorisnika = podaci[i].opisKorisnika;

      let slikaKlase = "onama-kuhari-slika-normano";
      if (i == 1) {
        slikaKlase += " onama-kuhari-slika-povecati-ante ";
      } else if (i == 2) {
        slikaKlase = " onama-kuhari-slika-flip ";
      }

      ispis += "<div class='kartica-kuhar'>";
      ispis += "<div class='onama-kuhar-opis'>";
      ispis +=
        "<h3 class='fs-r fw-semi-bold text-primarna-400'>" +
        imePrezime +
        "</h3>";
      ispis += "<p class='text-neutralna-100 | opis-korisnika'>" + opisKorisnika + "</p>";
      ispis += "</div>";
      ispis += "<div class='onama-kuhari-doljnji-dio'>";
      ispis +=
        "<img src='../" +
        slikaKorisnikaBezPozadine +
        "' alt='Slika kuhara/ice" +
        imePrezime +
        "' class='" +
        slikaKlase +
        "' />";
      ispis +=
        "<a href='detalji/detalji-korisnika.html?id=" + korisnikId + "'><button class='button-jela | btn-kuhari'>Pogledajte jela</button></a>";
      ispis += "</div>";
      ispis += "</div>";
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML += ispis;
  };
  var rukujGreskom = function (greska, roditelj) {
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  };

  // AJAX - dohvaćanje svih korisnika/kuhara
  var karticeKuhari = document.getElementById("kartice-kuhari");

  fetch("../includes/korisnici.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaKorisnici(podaci, karticeKuhari))
    .catch((greska) => rukujGreskom(greska.toString(), karticeKuhari));
});
