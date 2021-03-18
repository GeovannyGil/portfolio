window.onscroll = function () {
  let y = window.scrollY;
  if (y > 20) {
    document.getElementById("navbar").classList.add('sticky');
    document.querySelector('.titulo-about-me').classList.remove("desactivar");
  } else {
    document.getElementById("navbar").classList.remove('sticky');
  }
}

//Este es para el menu
var barritasDeHamburguesa = document.getElementById('botonHamburguesa');
var menuActivo = document.querySelector('.navbar .max-width ul.menu');
var iconoCambio = document.querySelector('.navbar .max-width .menu-btn i');

barritasDeHamburguesa.addEventListener("click", function () {
  menuActivo.classList.toggle("active");
  iconoCambio.classList.toggle("active");
});

