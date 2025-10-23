const introAnimacija = () => {
    var introTekstSlovo = document.querySelectorAll(".intro-tekst-slovo");

    for (let i = 0; i < introTekstSlovo.length; i++) {
        introTekstSlovo[i].classList.add("intro-tekst-animacija");
        let animationDelaySkupa = 300;
        introTekstSlovo[i].style.animationDelay = "calc(" + animationDelaySkupa + "ms + " + i + " * 50ms)";
    }
  };
  
  export default introAnimacija;
  