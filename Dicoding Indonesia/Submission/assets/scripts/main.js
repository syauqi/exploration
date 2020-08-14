if (window.screen.width < 780) {
  document.write('<script src="assets/scripts/mobile.js"></script>');
}

window.onscroll = function () {
  Lol();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function Lol() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
