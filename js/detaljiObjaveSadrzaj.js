document.addEventListener("DOMContentLoaded", () => {
    /* INTRO ANIMACIJA */
    const introAnimacija = () => {
    var introTekstSlovo = document.querySelectorAll(".intro-tekst-slovo");

    for (let i = 0; i < introTekstSlovo.length; i++) {
        introTekstSlovo[i].classList.add("intro-tekst-animacija");
        let animationDelaySkupa = 300;
        introTekstSlovo[i].style.animationDelay = "calc(" + animationDelaySkupa + "ms + " + i + " * 50ms)";
      }
    };
    introAnimacija();

    var url = window.location.search.split("=")[1];
  
    /* SADRŽAJ */
    var rukujPodacimaRecepti = function (podaci, roditelj) {
      var ispis = "",
        objavaId,
        naslovObjave,
        opisObjave,
        datumObjavljivanjaObjave,
        korisnikId,
        imePrezime,
        slikaKorisnikaKrug,
        urlSlike;
      for (let i = 0; i < podaci.length; i++) {
        objavaId = podaci[i].objavaId;
        naslovObjave = podaci[i].naslovObjave;
        opisObjave = podaci[i].opisObjave;
        datumObjavljivanjaObjave = podaci[i].datumObjavljivanjaObjave;
        korisnikId = podaci[i].korisnikId;
        imePrezime = podaci[i].imePrezime;
        slikaKorisnikaKrug = podaci[i].slikaKorisnikaKrug;
        urlSlike = podaci[i].urlSlike;
  
        if (objavaId == url) {
          ispis += "<div class='detalji-objave-container'>";
            ispis += "<h1 class='detalji-objave-naslov'>" + naslovObjave + "</h1>";
            ispis += "<div>";
                ispis += "<img src='../../" + urlSlike + "' />"
                ispis += "<div class='detalji-objave-slika-korinik-container'>";
                    ispis += "<div class='detalji-objave-korisnik'>";
                        ispis += "<p>" + imePrezime + "</p>";
                        ispis += "<a href='detalji-korisnika.html?id=" + korisnikId + "'><img src='../../" + slikaKorisnikaKrug + "' alt='Slika korisnika " + imePrezime + "' /></a>"
                    ispis += "</div>";
                    ispis += "<p>" + datumObjavljivanjaObjave + "</p>";
                ispis += "</div>";
            ispis += "</div>";
            ispis += "<p class='detalji-objave-paragraf'>" + opisObjave[0] + "</p>";
            ispis += "<div id='detalji-objave-slika2'>";
            /* Ispis slika preko druge funkcije */
            ispis += "</div>";
            ispis += "<p class='detalji-objave-paragraf'>" + opisObjave[1] + "</p>";
          ispis += "</div>";
        }
      }
      /* postavljanje dohvaćenih podataka u HTML stablo */
      roditelj.innerHTML += ispis;
    };
  
    var rukujGreskom = function (greska, roditelj) {
      roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
    };
  
    var detaljiObjavaSadrzaj = document.getElementById(
      "detalji-objava-sadrzaj"
    );
    fetch("../../includes/detalji-objava.php")
      .then((odgovor) => odgovor.json())
      .then((podaci) => rukujPodacimaRecepti(podaci, detaljiObjavaSadrzaj))
      .catch((greska) => rukujGreskom(greska.toString(), detaljiObjavaSadrzaj));
  
  
    /* SLIKA */
    setTimeout(() => {
      var rukujPodacimaRecepti = function (podaci, roditelj) {
        var ispis = "",
          objavaId,
          nazivSlike,
          urlSlike;
        for (let i = 0; i < podaci.length; i++) {
          objavaId = podaci[i].objavaId;
          nazivSlike = podaci[i].nazivSlike;
          urlSlike = podaci[i].urlSlike;
    
          if (objavaId == url) {
            ispis += "<img src='../../" + urlSlike + "' alt='Slika " + nazivSlike + "' />";
          }
        }
        /* postavljanje dohvaćenih podataka u HTML stablo */
        roditelj.innerHTML += ispis;
      };
    
      var rukujGreskom = function (greska, roditelj) {
        roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
      };
    
      var detaljiObjaveSlika = document.getElementById(
        "detalji-objave-slika2"
      );
      fetch("../../includes/detalji-objava-slike.php")
        .then((odgovor) => odgovor.json())
        .then((podaci) => rukujPodacimaRecepti(podaci, detaljiObjaveSlika))
        .catch((greska) => rukujGreskom(greska.toString(), detaljiObjaveSlika));
    }, 100);
    
  })