document.addEventListener("DOMContentLoaded", () => {
  /* RECEPTI */
  /* Filtriranje recepta */
  var checkBoxJuhe = document.getElementById("juhe");
  checkBoxJuhe.addEventListener("click", () => {
    var receptiJuhe = document.querySelectorAll(".Juhe");
    receptiJuhe.forEach((entry) => {
      entry.classList.toggle("recept-sakri");
    });
  });

  var checkBoxGlavnaJela = document.getElementById("glavna_jela");
  checkBoxGlavnaJela.addEventListener("click", () => {
    var receptiGlavnaJela = document.querySelectorAll(".GlavnaJela");
    receptiGlavnaJela.forEach((entry) => {
      entry.classList.toggle("recept-sakri");
    });
  });

  var checkBoxDeserti = document.getElementById("deserti");
  checkBoxDeserti.addEventListener("click", () => {
    var receptiDeserti = document.querySelectorAll(".Deserti");
    receptiDeserti.forEach((entry) => {
      entry.classList.toggle("recept-sakri");
    });
  });

  /* Dohvćanje podatak iz baze */
  // definicija funkcije za rukovanje podacima
  var rukujPodacimaRecepti = function (podaci, roditelj) {
    var ispis = "",
      receptId,
      naslovRecepta,
      vrijemePripreme,
      datumObjavljivanjaRecepta,
      urlSlike,
      nazivKategorije;
    for (let i = 0; i < podaci.length; i++) {
      receptId = podaci[i].receptId;
      naslovRecepta = podaci[i].naslovRecepta;
      vrijemePripreme = podaci[i].vrijemePripreme;
      datumObjavljivanjaRecepta = podaci[i].datumObjavljivanjaRecepta;
      urlSlike = podaci[i].urlSlike;
      nazivKategorije = podaci[i].nazivKategorije;

      nazivKategorijeKlasa = nazivKategorije.replace(" ", "");
      ispis += "<div class='kartica-container " + nazivKategorijeKlasa + "'>";
      ispis += "<div class='kartica-slika-container'>";
      ispis +=
        "<img src='../" +
        urlSlike +
        "' alt='Slika recepta " +
        naslovRecepta +
        "' class='katica-slika' />";
      ispis += "</div>";
      ispis += "<div class='recepti-informacije'>";
      ispis += "<h3 class='fs-s fw-semi-bold'>" + naslovRecepta + "</h3>";
      ispis += "<div class='recepti-kartica'>";
      ispis += "<div class='recepti-datum-vrijeme'>";
      ispis += "<p class='recepti-datum'>" + datumObjavljivanjaRecepta + "</p>";
      ispis += "<div class='flex-sat-vrijeme'>";
      ispis += "<img src='../Slike/Ilustracije/Vrijeme-ikonica.png'/>";
      ispis +=
        "<p class='fs-m text-sekundarna fw-regular-bold'>" +
        vrijemePripreme +
        "</p>";
      ispis += "</div>";
      ispis += "</div>";
      ispis +=
        "<a href='detalji/detalji-recepta.html?id=" +
        receptId +
        "'><button class='fw-medium | button-jela button-jela-mali-ekrani'>Saznaj više</button></a> ";
      ispis += "</div>";
      ispis += "</div>";
      ispis += "</div>";
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML += ispis;
  };

  // definicija funkcije za rukovanje greškom
  var rukujGreskom = function (greska, roditelj) {
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  };

  // AJAX - dohvaćanje svih recepta
  var gridGalerijaRecepata = document.getElementById("grid-galerija-recepti");

  fetch("../includes/recepti.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaRecepti(podaci, gridGalerijaRecepata))
    .catch((greska) => rukujGreskom(greska.toString(), gridGalerijaRecepata));
});
