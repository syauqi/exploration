var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc == "images/mozilla.png") {
    myImage.setAttribute("src", "images/mozilla-dev.png");
  } else {
    myImage.setAttribute("src", "images/mozilla.png");
  }
}; 

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Isi namamu dong.");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "Kamu hebat, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Kamu hebat, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
