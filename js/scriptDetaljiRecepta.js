import navigacija from "./moduli/modulNavigacija.js";
import introAnimacija from "./moduli/modulintroAnimacija.js";
import { animacija } from "./moduli/modulAnimacija.js";

document.addEventListener("DOMContentLoaded", () => {
  introAnimacija();
  
  setTimeout(() => {
    var sendvic = document.querySelector("#sendvic");

    sendvic.addEventListener("click", navigacija);

    var Slika1 = document.querySelectorAll(".detalji-recepta-slika1");
    Slika1.forEach((jedan) => animacija(jedan, "detaljiReceptaSlika1"));

    var tekstContainer = document.querySelectorAll(
      ".detalji-recepta-pocetak-teskt-container"
    );
    tekstContainer.forEach((jedan) =>
      animacija(jedan, "detaljiReceptaTekstContainer")
    );

    var sekcija1FadeIn = document.querySelectorAll(
      ".detalji-recepta-sekcija1-fadeIn"
    );
    sekcija1FadeIn.forEach((jedan) =>
      animacija(jedan, "detaljiReceptaSekcija1FadeIn")
    );

    var sastojciIkona = document.querySelectorAll(".sastojci-ikona");
    sastojciIkona.forEach(
      (jedan) => (jedan.style.animationDelay = Math.random() * 4 + "s")
    );
  }, 100);
});
