'use strict';

//Funktio joka vaihtaa navigointoi palkkia
  function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}