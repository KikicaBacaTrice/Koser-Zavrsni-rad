document.addEventListener("DOMContentLoaded", () => {
  // https://ui.dev/get-current-url-javascript
  var url = window.location.search.split("=")[1];

  /* SADRŽAJ */
  var rukujPodacimaRecepti = function (podaci, roditelj) {
    var ispis = "",
      receptId,
      naslovRecepta,
      opisRecepta,
      sastojciRecepta,
      vrijemePripreme,
      ocjena,
      korisnikId,
      imePrezime,
      slikaKorisnikaKrug,
      urlSlike;
    for (let i = 0; i < podaci.length; i++) {
      receptId = podaci[i].receptId;
      naslovRecepta = podaci[i].naslovRecepta;
      opisRecepta = podaci[i].opisRecepta;
      sastojciRecepta = podaci[i].sastojciRecepta;
      vrijemePripreme = podaci[i].vrijemePripreme;
      ocjena = podaci[i].ocjena;
      korisnikId = podaci[i].korisnikId;
      imePrezime = podaci[i].imePrezime;
      slikaKorisnikaKrug = podaci[i].slikaKorisnikaKrug;
      urlSlike = podaci[i].urlSlike;

      if (receptId == url) {
        ispis += "<div class='detalji-recepta-pocetak'>";
          ispis += "<div class='detalji-recepta-pocetak-teskt'>";
            ispis += "<div class='detalji-recepta-pocetak-teskt-container'>";
             ispis += "<h1 class='detalji-recepta-naslov-recepta detalji-recepta-sekcija1-fadeIn'>" + naslovRecepta + "</h1>";
            ispis += "</div>"; 
            ispis += "<div class='detalji-recepta-pocetak-informacije detalji-recepta-sekcija1-fadeIn'>";
              ispis += "<div class='detalji-recepta-ocjena'>"; 
                for(let i = 1; i <= ocjena; i++){
                  ispis +="<img src='../../Slike/Ilustracije/Zvijezdice.svg' />";  
                }
              ispis += "</div>"; 
              ispis += "<div class='detalji-recepta-vrijeme'>"; 
                ispis += "<img src='../../Slike/Ilustracije/Vrijeme-ikonica.png' />";
                ispis += "<p>" + vrijemePripreme + "</p>";
              ispis += "</div>";
            ispis += "</div>";
          ispis += "</div>";
          ispis += "<div class='slika-container'>";
            ispis += "<img src='../../"+ urlSlike + "' src='Slika recepta " + naslovRecepta + "' class='detalji-recepta-slika1' />";
            ispis += "<div class='detalji-recepta-korisnik'>";
              ispis += "<a href='detalji-korisnika.html?id=" + korisnikId + "'><img src='../../" + slikaKorisnikaKrug +"' /></a>";
              ispis += "<p>" + imePrezime + "</p>";
            ispis += "</div>";
          ispis += "</div>";
        ispis += "</div>";
        ispis += "<div class='detalji-recepta-opis'>";
          ispis += "<img src='../../Slike/Ilustracije/Sastojci-ikonica2.svg' class='sastojci-ikona' />";
          ispis += "<p>" + opisRecepta + "</p>";
          ispis += "<img src='../../Slike/Ilustracije/Sastojci-ikonica2.svg' class='sastojci-ikona' />";
        ispis += "</div>";
        ispis += "<div id='detalji-recepta-slike' class='detalji-recepta-slika2'>";
          /* Ispis slika preko druge funkcije */
        ispis += "</div>";
        ispis += "<div class='detalji-recepta-sastojci'>";
          ispis += "<h3>Sastojci:</h3>";
          ispis += "<ul>";
          sastojciRecepta.forEach(sastojakRecepta => {
            ispis += "<li>";
              ispis += "<img src='../../Slike/Ilustracije/Sastojci-ikonica2.svg' class='sastojci-ikona' />"
              ispis += sastojakRecepta;
              
            ispis += "</li>";
          });
          ispis += "</ul>";
        ispis += "</div>";
      }
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML += ispis;
  };

  var rukujGreskom = function (greska, roditelj) {
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  };

  var detaljiReceptaSadrzaj = document.getElementById(
    "detalji-recepta-sadrzaj"
  );
  fetch("../../includes/detalji-recepta.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaRecepti(podaci, detaljiReceptaSadrzaj))
    .catch((greska) => rukujGreskom(greska.toString(), detaljiReceptaSadrzaj));


  /* SLIKE */
  setTimeout(() => {
    var rukujPodacimaRecepti = function (podaci, roditelj) {
      var ispis = "",
        receptId,
        nazivSlike,
        urlSlike;
      for (let i = 0; i < podaci.length; i++) {
        receptId = podaci[i].receptId;
        nazivSlike = podaci[i].nazivSlike;
        urlSlike = podaci[i].urlSlike;
  
        if (receptId == url) {
          ispis += "<img src='../../" + urlSlike + "' alt='Slika " + nazivSlike + "' />";
        }
      }
      /* postavljanje dohvaćenih podataka u HTML stablo */
      roditelj.innerHTML += ispis;
    };
  
    var rukujGreskom = function (greska, roditelj) {
      roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
    };
  
    var detaljiReceptaSlike = document.getElementById(
      "detalji-recepta-slike"
    );
    fetch("../../includes/detalji-recepta-slike.php")
      .then((odgovor) => odgovor.json())
      .then((podaci) => rukujPodacimaRecepti(podaci, detaljiReceptaSlike))
      .catch((greska) => rukujGreskom(greska.toString(), detaljiReceptaSlike));
  }, 100);
  
});
