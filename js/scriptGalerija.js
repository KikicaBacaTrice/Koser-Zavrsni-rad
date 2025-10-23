import navigacija from "./moduli/modulNavigacija.js";
import introAnimacija from "./moduli/modulintroAnimacija.js";
import { animacija } from "./moduli/modulAnimacija.js";

document.addEventListener("DOMContentLoaded", () => {
  introAnimacija();

  var sendvic = document.querySelector("#sendvic");

  sendvic.addEventListener("click", navigacija);

  /* Recepti */
  function zaSvaki(brojkriterija) {
    let i = 0;
    brojkriterija.forEach((kriterij) => {
      kriterij.style.animationDelay = "calc(10ms + " + i + "ms)";
      i += 50;
    });
  }

  setTimeout(() => {
    var receptiInformacije = document.querySelectorAll(".recepti-informacije");
    zaSvaki(receptiInformacije);
    receptiInformacije.forEach((jedan) => animacija(jedan, "stranicaRecepti"));
  }, "1000");
});
