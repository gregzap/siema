window.onload = ustawKonona;
let speedKonon = 1;
let pomusz = 0;
let licznikKonona = 0;
let stopnie = 1;
let takNie = 0;
let modeHelp = 0;
let kolor;
let w = document.documentElement.clientWidth;
window.addEventListener("resize", ustawKonona);

function liczeSe() {
  document.getElementById("licznik").innerHTML = licznikKonona;
}
function zakrencKonona() {
  const krenciol = document.getElementById("pic");
  krenciol.style.transform = "rotate(" + stopnie + "deg)";
  if (takNie == 0) {
    stopnie++;
  } else {
    stopnie--;
  }
}
function fajnyKolor() {
  kolor = Math.floor(Math.random() * 16777215).toString(16);
}
function spidnijKonona() {
  speedKonon++;
}
function zwolnijKonona() {
  if (speedKonon > 0) {
    speedKonon--;
  }
}
function ustawKonona() {
  w = document.documentElement.clientWidth;
  const konon = document.getElementById("pic");
  document.getElementById("siema").style.height = konon.height + 4 + "px";
  konon.style.left = w / 2 - konon.width / 2 + "px";
  zakrencKonona();
}
function ruszSie() {
  const konon = document.getElementById("pic");
  let start = w / 2 - konon.width / 2;
  let id = setInterval(frame, 5);
  function frame() {
    liczeSe();
    zakrencKonona();
    //turnDark();
    if (takNie == 0) {
      if (start >= w - konon.width - 10) {
        takNie = 1;
        fajnyKolor();
        document.getElementById("siema").style.backgroundColor = "#" + kolor;
        document.getElementById("siema").style.transition = "2s";
        licznikKonona++;
        pomusz = 1;
      } else {
        start += speedKonon;
        konon.style.left = start + "px";
      }
    } else {
      if (start <= 0) {
        takNie = 0;
        fajnyKolor();
        document.getElementById("siema").style.backgroundColor = "#" + kolor;
        document.getElementById("siema").style.transition = "2s";
        licznikKonona++;
        pomusz = 1;
      } else {
        start -= speedKonon;
        konon.style.left = start + "px";
      }
    }
  }
}
function turnDark() {
  if (modeHelp == 0) {
    if (pomusz == 0) {
      document.getElementById("siema").style.backgroundColor = "#393e46";
    }
    for (let i = 0; i < document.getElementsByClassName("siemaa").length; i++) {
      document.getElementsByClassName("siemaa")[i].style.backgroundColor =
        "#393e46";
    }
    document.getElementById("przycisk1").style.backgroundColor = "#393e46";
    document.getElementById("przycisk2").style.backgroundColor = "#393e46";
    document.body.style.backgroundColor = "#222831";
    document.getElementById("onoff").innerHTML = "ON";
    modeHelp = 1;
  } else {
    if (pomusz == 0) {
      document.getElementById("siema").style.backgroundColor = "#3b6978";
    }
    for (let i = 0; i < document.getElementsByClassName("siemaa").length; i++) {
      document.getElementsByClassName("siemaa")[i].style.backgroundColor =
        "#3b6978";
    }
    document.getElementById("przycisk1").style.backgroundColor = "#3b6978";
    document.getElementById("przycisk2").style.backgroundColor = "#3b6978";
    document.body.style.backgroundColor = "#204051";
    document.getElementById("onoff").innerHTML = "OFF";
    modeHelp = 0;
  }
}
