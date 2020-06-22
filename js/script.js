window.onload = ustawKonona;
var speedKonon=1;
var licznikKonona = 0;
var stopnie=1;
var takNie = 0;
var kolor;
var w = document.documentElement.clientWidth;
window.addEventListener("resize", ustawKonona);
function liczeSe(){
    document.getElementById("licznik").innerHTML = licznikKonona;
}
function zakrencKonona(){
    var krenciol = document.getElementById("pic");
     krenciol.style.transform = "rotate("+stopnie+"deg)"; 
     if (takNie==0){
         stopnie++;
     }
     else {
         stopnie--;
     }
}
function fajnyKolor(){
     kolor = Math.floor(Math.random()*16777215).toString(16);
}
function spidnijKonona(){
    speedKonon++;
}
function zwolnijKonona(){
    if (speedKonon>0){
        speedKonon--;
    }
}
function ustawKonona(){
    w = document.documentElement.clientWidth;
    var konon = document.getElementById("pic");
    document.getElementById("siema").style.height = konon.height+4+ "px";
    konon.style.left = w / 2 - konon.width / 2 +"px";
    zakrencKonona();
}
function ruszSie(){
    var konon = document.getElementById("pic");
    var start = w/2-konon.width/2;
    var id = setInterval(frame, 5);
    function frame(){
        liczeSe();
        zakrencKonona();
        if (takNie == 0){
            if (start>=w-konon.width-10){
                //clearInterval(id)
                //ustawKonona();
                takNie=1;
                fajnyKolor();
                document.getElementById("siema").style.backgroundColor = "#"+kolor;
                licznikKonona++;
            } else {
                start+=speedKonon;
                konon.style.left = start + "px";
            }
        }
        else {
            if (start<=0){
                //clearInterval(id)
                //ustawKonona();
                takNie=0;
                fajnyKolor();
                document.getElementById("siema").style.backgroundColor = "#"+kolor;
                licznikKonona++;
            } else {
                start-=speedKonon;
                konon.style.left = start + "px";
            }
        } 
    }
}