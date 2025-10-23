var threshold = {
  threshold: 0.5,
};

export function animacija(jedan, element) {
  setTimeout(() => {
    var observerZaSve = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (element) {
            case "tekstSLijeva":
              entry.target.classList.add("tekst-animacija-s-lijeva-deklaracija");
              break;
            case "gornjiDioMobitel":
              entry.target.classList.add("pocetna-recept-gornji-mobitel");
              break;
            case "receptGornjiDio":
              entry.target.classList.add("poctna-recepti-animacija-gornji");
              break;
            case "receptDoljnjiDio":
              entry.target.classList.add("poctna-recepti-animacija-donji");
              break;
            case "receptGornjiDioInverzno":
              entry.target.classList.add(
                "poctna-recepti-animacija-gornji-inverzno"
              );
              break;
            case "receptDoljnjiDioInverzno":
              entry.target.classList.add(
                "poctna-recepti-animacija-donji-inversno"
              );
              break;
            case "objavaSolo":
              entry.target.classList.add("animacija-objava-solo");
              break;
            case "objavaKartice":
              entry.target.classList.add("animacija-objava-kartica");
              break;
            case "stranicaRecepti":
              entry.target.classList.add("recepti-informacije-animacija");
              break;
            case "koserHeroSlika":
              entry.target.classList.add("koser-hero-slika-animacija");
              break;
            case "koserFadeIn":
              entry.target.classList.add("o-koseru-fade-in");
              break;
            case "koserSekcija2Slika":
              entry.target.classList.add("koser-sekcija2-slika-animacija");
              break;
            case "koserSekcija3Kartice":
              entry.target.classList.add("koser-sekcija3-kartice-animacija");
              break;
            case "koserPosebnoKriteriji":
              entry.target.classList.add("koser-posebno-kriterij-animacija");
              break;
            case "detaljiReceptaSlika1":
              entry.target.classList.add("detalji-recepta-slika1-animacija");
              break;
            case "detaljiReceptaTekstContainer":
              entry.target.classList.add(
                "detalji-recepta-pocetak-teskt-animacija"
              );
              break;
            case "detaljiReceptaSekcija1FadeIn":
              entry.target.classList.add(
                "detalji-recepta-sekcija1-fadeIn-animacija"
              );
              break;
            default:
              break;
          }
          observer.unobserve(entry.target);
        } else {
          return;
        }
      });
    }, threshold);
    observerZaSve.observe(jedan);
  }, 3500);

}
