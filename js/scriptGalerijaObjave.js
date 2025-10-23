document.addEventListener("DOMContentLoaded", () => {
  /* OBJAVE */
  /* Dohvćanje podatak iz baze */
  // definicija funkcije za rukovanje podacima
  var rukujPodacimaObjavama = function (podaci, roditelj) {
    var ispis = "",
      objavaId,
      naslovObjave,
      datumObjavljivanjaObjave,
      urlSlike;
    for (let i = 0; i < podaci.length; i++) {
      objavaId = podaci[i].objavaId;
      naslovObjave = podaci[i].naslovObjave;
      datumObjavljivanjaObjave = podaci[i].datumObjavljivanjaObjave;
      urlSlike = podaci[i].urlSlike;

      ispis += "<div class='kartica-container'>";
      ispis += "<div class='kartica-slika-container'>";
      ispis +=
        "<img src='../" +
        urlSlike +
        "' alt='Slika recepta " +
        naslovObjave +
        "' class='katica-slika' />";
      ispis += "</div>";
      ispis += "<div class='recepti-informacije'>";
      ispis += "<h3 class='fs-s fw-semi-bold'>" + naslovObjave + "</h3>";
      ispis += "<div class='recepti-kartica'>";
      ispis += "<div class='recepti-datum-vrijeme'>";
      ispis += "<p class='recepti-datum'>" + datumObjavljivanjaObjave + "</p>";
      ispis += "</div>";
      ispis +=
        "<a href='detalji/detalji-objave.html?id=" +
        objavaId +
        "'><button class='fw-medium | button-jela button-jela-mali-ekrani'>Saznaj više</button></a> ";
      ispis += "</div>";
      ispis += "</div>";
      ispis += "</div>";
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML += ispis;
  };
  var rukujGreskom = function (greska, roditelj) {
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  };

  // AJAX - dohvaćanje svih objava
  var gridGalerijaObjava = document.getElementById("grid-galerija-objava");

  fetch("../includes/objave.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaObjavama(podaci, gridGalerijaObjava))
    .catch((greska) => rukujGreskom(greska.toString(), gridGalerijaObjava));
});
