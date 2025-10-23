const navigacija = () => {
  var sendvic = document.querySelector("#sendvic");
  var w = window.innerWidth;

  var navigacija = document.getElementsByClassName("navigacija")[0];
  navigacija.classList.toggle("nav-dodaj-navigaciju");
  sendvic.classList.toggle("open");

  if (w < 768) {
    var navBtn = document.getElementsByClassName("nav-button")[0];
    navBtn.classList.toggle("nav-dodaj-btn");
  }
};

export default navigacija;
