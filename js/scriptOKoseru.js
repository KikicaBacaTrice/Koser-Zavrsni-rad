import navigacija from "./moduli/modulNavigacija.js";
import introAnimacija from "./moduli/modulintroAnimacija.js";
import { animacija } from "./moduli/modulAnimacija.js";

document.addEventListener("DOMContentLoaded", () => {
  introAnimacija();
  
  sendvic.addEventListener("click", navigacija);

  /* Animacija ulaska teksta */
  var tekstAnimacijaSLijeva = document.querySelectorAll(
    ".tekst-animacija-s-lijeva"
  );
  tekstAnimacijaSLijeva.forEach((jedan) => animacija(jedan, "tekstSLijeva"));

  var koserAnimacijaSDesna = document.querySelectorAll(
    ".koser-hero-slika-container"
  );
  koserAnimacijaSDesna.forEach((jedan) => animacija(jedan, "koserHeroSlika"));

  var koserAnimacijaSDesna = document.querySelectorAll(
    ".koser-animacija-s-desna"
  );
  koserAnimacijaSDesna.forEach((jedan) =>
    animacija(jedan, "koserSekcija2Slika")
  );

  var koserFadeIn = document.querySelectorAll(".fadeIn");
  koserFadeIn.forEach((jedan) => animacija(jedan, "koserFadeIn"));

  /* Kartice */
  var koserSekcija3Kartice = document.querySelectorAll(
    ".koser-sekcija3-kartice"
  );
  koserSekcija3Kartice.forEach((jedan) =>
    animacija(jedan, "koserSekcija3Kartice")
  );

  /* Kriteriji */
  var mesoKriteriji = document.querySelectorAll(".meso-kriterij");
  mesoKriteriji.forEach((jedan) => animacija(jedan, "koserPosebnoKriteriji"));

  var mesoKriterijiNe = document.querySelectorAll(".meso-kriterij-ne");
  mesoKriterijiNe.forEach((jedan) => animacija(jedan, "koserPosebnoKriteriji"));

  var mlijekoKriteriji = document.querySelectorAll(".poseban-kriterij-mlijeko");
  mlijekoKriteriji.forEach((jedan) =>
    animacija(jedan, "koserPosebnoKriteriji")
  );

  var pareveKriteriji = document.querySelectorAll(".poseban-kriterij-pareve");
  pareveKriteriji.forEach((jedan) => animacija(jedan, "koserPosebnoKriteriji"));
});
