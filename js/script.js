import navigacija from "./moduli/modulNavigacija.js";
import introAnimacija from "./moduli/modulintroAnimacija.js";
import { animacija } from "./moduli/modulAnimacija.js";

document.addEventListener("DOMContentLoaded", () => {
  introAnimacija();
  
  var w = window.innerWidth;

  sendvic.addEventListener("click", navigacija);

  /* Hero animacija */
  var hrana = document.getElementsByClassName("hranaSve");


    setTimeout(() => {
      for (let i = 0; i < hrana.length; i++) {
        hrana[i].classList.add("hranaSveKraj");
        if (i <= 2) {
          hrana[i].style.animationDelay = "calc(10ms + 40ms * " + i + ")";
        } else if (i <= 5) {
          hrana[i].style.animationDelay = "calc(10ms + 70ms * " + i + ")";
        } else {
          hrana[i].style.animationDelay = "calc(10ms + 90ms * " + i + ")";
        }
      }
    }, 4000);
    
 

  /* Na hover */
  var grupaMeso = document.querySelector("#grupa-meso");
  var grupaPovrce = document.querySelector("#grupa-povrce");
  var grupaMlijeko = document.querySelector("#grupa-mlijeko");
  var opisMeso = document.getElementsByClassName("opis-meso")[0];
  var opisPovrce = document.getElementsByClassName("opis-povrce")[0];
  var opisMlijeko = document.getElementsByClassName("opis-mlijeko")[0];

  grupaMeso.addEventListener("mouseover", () => {
    grupaMeso.classList.add("grupa-jela-hover");
    opisMeso.classList.add("opis-prikaz");
  });
  grupaMeso.addEventListener("mouseleave", () => {
    grupaMeso.classList.add("grupa-jela-unhover");

    setTimeout(() => {
      grupaMeso.classList.remove("grupa-jela-unhover");
      grupaMeso.classList.remove("grupa-jela-hover");
      opisMeso.classList.remove("opis-prikaz");
    }, 300);
  });

  grupaPovrce.addEventListener("mouseover", () => {
    grupaPovrce.classList.add("grupa-jela-hover");
    opisPovrce.classList.add("opis-prikaz");
  });
  grupaPovrce.addEventListener("mouseleave", () => {
    grupaPovrce.classList.add("grupa-jela-unhover");

    setTimeout(() => {
      grupaPovrce.classList.remove("grupa-jela-unhover");
      grupaPovrce.classList.remove("grupa-jela-hover");
      opisPovrce.classList.remove("opis-prikaz");
    }, 300);
  });

  grupaMlijeko.addEventListener("mouseover", () => {
    grupaMlijeko.classList.add("grupa-jela-hover");
    opisMlijeko.classList.add("opis-prikaz");
  });
  grupaMlijeko.addEventListener("mouseleave", () => {
    grupaMlijeko.classList.add("grupa-jela-unhover");

    setTimeout(() => {
      grupaMlijeko.classList.remove("grupa-jela-unhover");
      grupaMlijeko.classList.remove("grupa-jela-hover");
      opisMlijeko.classList.remove("opis-prikaz");
    }, 300);
  });

  /* Ako je otvoreno na talbetu ili mobitelu */
  /* Pohranjivanje podataka o korisničkom uređaju u varijablu */
  var details = navigator.userAgent;

  /* Stvaranje regexp koji sadrži neke ključne riječi za mobilne uređaje da biste ga pretražili u nizu detalja */
  var regexp = /android|iphone|kindle|ipad/i;

  /* Upotreba metode test() za detaljno pretraživanje regexp => vraća Boolean vrijednost */
  var jeMobitel = regexp.test(details);

  if (jeMobitel) {
    setTimeout(() => {
      prikaziOpise();
    }, 2000);
    setInterval(prikaziOpise, 15000);
    function prikaziOpise() {
      grupaMlijeko.classList.add("grupa-jela-hover");
      opisMlijeko.classList.add("opis-prikaz");
      setTimeout(() => {
        grupaMlijeko.classList.remove("grupa-jela-hover");
        opisMlijeko.classList.remove("opis-prikaz");
      }, 4000);
      setTimeout(() => {
        grupaPovrce.classList.add("grupa-jela-hover");
        opisPovrce.classList.add("opis-prikaz");
        setTimeout(() => {
          grupaPovrce.classList.remove("grupa-jela-hover");
          opisPovrce.classList.remove("opis-prikaz");
        }, 4000);
      }, 4500);
      setTimeout(() => {
        grupaMeso.classList.add("grupa-jela-hover");
        opisMeso.classList.add("opis-prikaz");
        setTimeout(() => {
          grupaMeso.classList.remove("grupa-jela-hover");
          opisMeso.classList.remove("opis-prikaz");
        }, 4000);
      }, 8500);
    }
  }

  /* Animacija ulaska teksta */
  var tekstAnimacijaSLijeva = document.querySelectorAll(
    ".tekst-animacija-s-lijeva"
  );
  tekstAnimacijaSLijeva.forEach((jedan) => animacija(jedan, "tekstSLijeva"));

  /* Animacija recepti početna => responzivno */
  setTimeout(() => {
    var receptGornjiDio = document.querySelectorAll(".recept-gornji-dio");
    var receptGornjiDioInverzno = document.querySelectorAll(
      ".recept-gornji-dio-inversno"
    );
    var receptDonjiDio = document.querySelectorAll(".recept-donji-dio");
    var receptDonjiDioInverzno = document.querySelectorAll(
      ".recept-donji-dio-inversno"
    );

    if (w < 550) {
      receptGornjiDio.forEach((jedan) => animacija(jedan, "gornjiDioMobitel"));
      receptGornjiDioInverzno.forEach((jedan) =>
        animacija(jedan, "gornjiDioMobitel")
      );
    } else {
      receptGornjiDio.forEach((jedan) => animacija(jedan, "receptGornjiDio"));
      receptDonjiDio.forEach((jedan) => animacija(jedan, "receptDoljnjiDio"));
      receptGornjiDioInverzno.forEach((jedan) =>
        animacija(jedan, "receptGornjiDioInverzno")
      );
      receptDonjiDioInverzno.forEach((jedan) =>
        animacija(jedan, "receptDoljnjiDioInverzno")
      );
    }

    var objaveSolo = document.querySelectorAll(".objava-solo");
    objaveSolo.forEach((jedan) => animacija(jedan, "objavaSolo"));

    var objaveKartice = document.querySelectorAll(".kartica-objave");
    objaveKartice.forEach((jedan) => animacija(jedan, "objavaKartice"));
  }, "500");

  /* Animacija objave */

  /* Dohvćanje podatak iz baze */
  // definicija funkcije za rukovanje podacima
  var rukujPodacimaRecepti = function (podaci, roditelj) {
    var ispis = "",
      receptId,
      naslovRecepta,
      urlSlike,
      vrijemePripreme,
      imePrezime,
      slikaKorisnikaKrug;
    for (let i = 0; i < podaci.length; i++) {
      receptId = podaci[i].receptId;
      naslovRecepta = podaci[i].naslovRecepta;
      urlSlike = podaci[i].urlSlike;
      vrijemePripreme = podaci[i].vrijemePripreme;
      imePrezime = podaci[i].imePrezime;
      slikaKorisnikaKrug = podaci[i].slikaKorisnikaKrug;
      let inverznoGornji = "";
      let inverznoDoljnji = "";
      if (i == 1) {
        inverznoGornji = "recept-gornji-dio-inversno";
        inverznoDoljnji = "recept-donji-dio-inversno";
      } else {
        inverznoGornji = "recept-gornji-dio";
        inverznoDoljnji = "recept-donji-dio";
      }
      ispis += "<div class='col-s-6 col-12 | jelo-recept recept" + i + "'>"; // novi recept
      ispis += "<div class='bg-primarna-400 | " + inverznoGornji + "'>"; // recept tekst/gornji dio
      ispis += "<div class='gornji-dio-padding'>"; // gornji dio padding
      ispis += "<div class='kuhar'>"; // kuhar
      ispis +=
        "<img src='" +
        slikaKorisnikaKrug +
        "' alt='Kuhar " +
        imePrezime +
        "'/>"; // slika kuhara
      ispis +=
        "<p class='text-sekundarna fw-semi-bold fs-xxs | ime-kuhar'>" +
        imePrezime +
        "</p>";
      ispis += "</div>"; // zatvaranje kuhar
      ispis +=
        "<h3 class='fs-s fw-semi-bold | naslov-recept'>" +
        naslovRecepta +
        "</h3>"; // ime recepta
      ispis += "</div>"; // zatvaranje gornji dio padding
      ispis += "<div class='donji-dio-flex-vrijeme'>"; // kartica gornji dio vrijeme
      ispis += "<div class='flex-sat-vrijeme'>"; // sat vrijeme
      ispis +=
        "<img src='Slike/Ilustracije/Vrijeme-ikonica.png' alt='Slika recepta " +
        naslovRecepta +
        "' /><p class='fs-m text-sekundarna fw-regular-bold'>" +
        vrijemePripreme +
        "</p>";
      ispis += "</div>"; // zatvaranje sat vrijeme
      ispis +=
        "<a href='stranice/detalji/detalji-recepta.html?id=" +
        receptId +
        "'><button class='fw-medium | button-jela button-jela-mali-ekrani'>Saznaj više</button></a>";
      ispis += "</div>"; // zatvaranje kartica donji dio vrijeme
      ispis += "</div>"; // zatvaranje kartica gornji dio
      ispis +=
        "<div class='" +
        inverznoDoljnji +
        " '><img src='" +
        urlSlike +
        "' alt='Slika recepta " +
        naslovRecepta +
        "'></div>";
      ispis += "</div>"; // cijeli recept gotov
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML = ispis;
  };

  // definicija funkcije za rukovanje greškom
  var rukujGreskom = function (greska, roditelj) {
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  };

  // AJAX - dohvaćanje recepta koje je preporučil urednik
  var galerijaRecepata = document.getElementById("galerija-recepata1");

  fetch("includes/pocetna-recepti.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaRecepti(podaci, galerijaRecepata))
    .catch((greska) => rukujGreskom(greska.toString(), galerijaRecepata));

  // AJAX - dohvaćanje popularnih recepta
  var galerijaRecepata2 = document.getElementById("galerija-recepata2");

  fetch("includes/pocetna-recepti-popularno.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaRecepti(podaci, galerijaRecepata2))
    .catch((greska) => rukujGreskom(greska.toString(), galerijaRecepata2));

  /* OBJAVE */
  /* Obajva Solo */
  /* Dohvćanje podatak iz baze */
  // definicija funkcije za rukovanje podacima
  var rukujPodacimaObjaveSolo = function (podaci, roditelj) {
    var ispis = "",
      objavaId,
      naslovObjave,
      datumObjavljivanjaObjave,
      urlSlike;
    for (let i = 0; i < 1; i++) {
      objavaId = podaci[i].objavaId;
      naslovObjave = podaci[i].naslovObjave;
      datumObjavljivanjaObjave = podaci[i].datumObjavljivanjaObjave;
      urlSlike = podaci[i].urlSlike;
      ispis +=
        "<img src='" +
        urlSlike +
        "' alt='Slika objave " +
        naslovObjave +
        "' />";
      ispis += "<div class='objave-informacije'>";
      ispis +=
        "<h4 class='fs-r fw-regular text-primarna-400'>" +
        naslovObjave +
        "</h4>";
      ispis += "<div class='objava-flex-informacije'>";
      ispis +=
        "<a href='stranice/detalji/detalji-objave.html?id=" + objavaId + "'><button class='button-jela'>Pročitajte više</button></a>";
      ispis +=
        "<p class='fs-s text-neutralna-100'>" +
        datumObjavljivanjaObjave +
        "</p>";
      ispis += "</div>";
      ispis += "</div>";
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML = ispis;
  };
  // AJAX - dohvaćanje objave koja će biti odvojena
  var sekcijaObajveGlavnaObjava = document.getElementById("obajva-solo");

  fetch("includes/pocetna-objave.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) =>
      rukujPodacimaObjaveSolo(podaci, sekcijaObajveGlavnaObjava)
    )
    .catch((greska) =>
      rukujGreskom(greska.toString(), sekcijaObajveGlavnaObjava)
    );

  /* Obajva više */
  var rukujPodacimaObjaveVise = function (podaci, roditelj) {
    var ispis = "",
      objavaId,
      naslovObjave,
      datumObjavljivanjaObjave,
      urlSlike;
    for (let i = 1; i < podaci.length; i++) {
      objavaId = podaci[i].objavaId;
      naslovObjave = podaci[i].naslovObjave;
      datumObjavljivanjaObjave = podaci[i].datumObjavljivanjaObjave;
      urlSlike = podaci[i].urlSlike;

      ispis += "<div class='bg-primarna-400 | objava kartica-objave'>";
      ispis +=
        "<img src='" +
        urlSlike +
        "' alt='Slika objave " +
        naslovObjave +
        "' />";
      ispis += "<div class='objave-informacije-kartice'>";
      ispis +=
        "<h4 class='fs-s fw-regular text-primarna-400 | objave-naslov'>" +
        naslovObjave +
        "</h4>";
      ispis +=
        "<div><a href='stranice/detalji/detalji-objave.html?id=" + objavaId + "'><button class='button-jela'>Pročitajte više</button></a></div>";
      ispis += "</div>";
      ispis += "</div>";
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML = ispis;
  };

  // AJAX - dohvaćanje objava koje će biti zajedno
  var sekcijaObajveDvijeObjave = document.getElementById("objava-vise");
  fetch("includes/pocetna-objave.php")
    .then((odgovor) => odgovor.json())
    .then((podaci) => rukujPodacimaObjaveVise(podaci, sekcijaObajveDvijeObjave))
    .catch((greska) =>
      rukujGreskom(greska.toString(), sekcijaObajveGlavnaObjava)
    );
});
