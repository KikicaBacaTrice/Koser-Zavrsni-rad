document.addEventListener("DOMContentLoaded", () => {
    // https://ui.dev/get-current-url-javascript
    var url = window.location.search.split("=")[1];

    /* POČETAK */
    var rukujPodacimaRecepti = function (podaci, roditelj) {
      var ispis = "",
      korisnikId,
      imePrezime,
      slikaKorisnikaKrug,
      opisKorisnika;
      for (let i = 0; i < podaci.length; i++) {
        korisnikId = podaci[i].korisnikId;
        imePrezime = podaci[i].imePrezime;
        slikaKorisnikaKrug = podaci[i].slikaKorisnikaKrug;
        opisKorisnika = podaci[i].opisKorisnika;
  
        if (korisnikId == url) {
          ispis += "<div class='detalji-korisnika-pocetak-container'>";
            ispis += "<div class='detalji-korisnika-pocetak-informacija'>";
              ispis += "<img src='../../" + slikaKorisnikaKrug + "' />";
              ispis += "<h1>" + imePrezime + "</h1>"
            ispis += "</div>";
            ispis += "<p>" + opisKorisnika + "</p>"
          ispis += "</div>";
          ispis += "<div class='detalji-korisnika-recepti-container'>";
            ispis += "<h1 class='detalji-korisnika-naslov'>Recepti</h1>"
            ispis += "<div id='detalji-korisnika-recepti' class='detalji-korisnika-flex'>";
            // ovdje ide ispis recepta pomoću druge funkcije
            ispis += "</div>";
          ispis += "</div>";
          ispis += "<div class='detalji-korisnika-recepti-container'>";
            ispis += "<h1 class='detalji-korisnika-naslov'>Objave</h1>"
            ispis += "<div id='detalji-korisnika-objave' class='detalji-korisnika-flex'>";
            // ovdje ide ispis objava pomoću druge funkcije
            ispis += "</div>";
          ispis += "</div>";
          
        }
      }
      /* postavljanje dohvaćenih podataka u HTML stablo */
      roditelj.innerHTML += ispis;
    };
  
    var rukujGreskom = function (greska, roditelj) {
      roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
    };
  
    var detaljiKorisnikaSadrzaj = document.getElementById(
      "detalji-korisnika-sadrzaj"
    );
    fetch("../../includes/korisnici.php")
      .then((odgovor) => odgovor.json())
      .then((podaci) => rukujPodacimaRecepti(podaci, detaljiKorisnikaSadrzaj))
      .catch((greska) => rukujGreskom(greska.toString(), detaljiKorisnikaSadrzaj));
  
  
    /* RECEPTI */
    setTimeout(() => {
      var rukujPodacimaRecepti = function (podaci, roditelj) {
        var ispis = "",
        receptId,
        naslovRecepta,
        vrijemePripreme,
        datumObjavljivanjaRecepta,
        urlSlike,
        korisnik_id;
        for (let i = 0; i < podaci.length; i++) {
            receptId = podaci[i].receptId;
            naslovRecepta = podaci[i].naslovRecepta;
            vrijemePripreme = podaci[i].vrijemePripreme;
            datumObjavljivanjaRecepta = podaci[i].datumObjavljivanjaRecepta;
            urlSlike = podaci[i].urlSlike;
            korisnik_id = podaci[i].korisnik_id;
    
          if (korisnik_id == url) {
            ispis += "<div class='kartica-container'>";
            ispis += "<div class='kartica-slika-container'>";
            ispis +=
                "<img src='../../" +
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
            ispis += "<img src='../../Slike/Ilustracije/Vrijeme-ikonica.png'/>";
            ispis +=
                "<p class='fs-m text-sekundarna fw-regular-bold'>" +
                vrijemePripreme +
                "</p>";
            ispis += "</div>";
            ispis += "</div>";
            ispis +=
                "<a href='detalji-recepta.html?id=" +
                receptId +
                "'><button class='fw-medium | button-jela button-jela-mali-ekrani'>Saznaj više</button></a> ";
            ispis += "</div>";
            ispis += "</div>";
            ispis += "</div>";
          }
        }
        /* postavljanje dohvaćenih podataka u HTML stablo */
        roditelj.innerHTML += ispis;
      };
    
      var rukujGreskom = function (greska, roditelj) {
        roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
      };
    
      var detaljiKorisnikaRecepti = document.getElementById(
        "detalji-korisnika-recepti"
      );
      fetch("../../includes/recepti.php")
        .then((odgovor) => odgovor.json())
        .then((podaci) => rukujPodacimaRecepti(podaci, detaljiKorisnikaRecepti))
        .catch((greska) => rukujGreskom(greska.toString(), detaljiKorisnikaRecepti));
    }, 100);

     /* OBJAVE */
     setTimeout(() => {
        var rukujPodacimaObjave = function (podaci, roditelj) {
          var ispis = "",
                objavaId,
                naslovObjave,
                datumObjavljivanjaObjave,
                urlSlike,
                korisnikId;
          for (let i = 0; i < podaci.length; i++) {
              objavaId = podaci[i].objavaId;
              naslovObjave = podaci[i].naslovObjave;
              datumObjavljivanjaObjave = podaci[i].datumObjavljivanjaObjave;
              urlSlike = podaci[i].urlSlike;
              korisnikId = podaci[i].korisnikId;
      
            if (korisnikId == url) {
                ispis += "<div class='kartica-container'>";
                ispis += "<div class='kartica-slika-container'>";
                ispis +=
                    "<img src='../../" +
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
                    "<a href='detalji-objave.html?id=" +
                    objavaId +
                    "'><button class='fw-medium | button-jela button-jela-mali-ekrani'>Saznaj više</button></a> ";
                ispis += "</div>";
                ispis += "</div>";
                ispis += "</div>";
            }
          }
          /* postavljanje dohvaćenih podataka u HTML stablo */
          roditelj.innerHTML += ispis;
        };
      
        var rukujGreskom = function (greska, roditelj) {
          roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
        };
      
        var detaljiKorisnikaObjave = document.getElementById(
          "detalji-korisnika-objave"
        );
        fetch("../../includes/objave.php")
          .then((odgovor) => odgovor.json())
          .then((podaci) => rukujPodacimaObjave(podaci, detaljiKorisnikaObjave))
          .catch((greska) => rukujGreskom(greska.toString(), detaljiKorisnikaObjave));
      }, 100);
    
  });
  