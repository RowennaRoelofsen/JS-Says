/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var groenVlak = document.getElementById("groen");
var roodVlak = document.getElementById("rood");
var geelVlak = document.getElementById("geel");
var blauwVlak = document.getElementById("blauw");
var knop = document.getElementById("knop");
var sequence = [0]; //de opeenloping aan kleuren, een getal tussen 0 en 3
var positie = 0; //positie in de sequence
var userInput = [];
var telRonde = 1;
var gestart = 0;


function ronde () {
document.getElementById("ronde").innerHTML= "Round: " + telRonde;
}

function zetAan(kleur) {
    if (kleur === 0) {
        groenVlak.style.opacity = "0.6";
        document.getElementById("c2").play();}
    else if ( kleur === 1 ) {
        roodVlak.style.opacity = "0.6";
        document.getElementById("c3").play();}
    else if ( kleur ===  2) {
        geelVlak.style.opacity = "0.6";
        document.getElementById("c4").play();}
    else if ( kleur === 3 ) {
        blauwVlak.style.opacity = "0.6";
        document.getElementById("c5").play();}
    }

function zetUit (kleur) {
    if (kleur === 0) {
        groenVlak.style.opacity = "1";}
    else if ( kleur === 1 ) {
        roodVlak.style.opacity = "1";}
    else if ( kleur === 2 ) {
        geelVlak.style.opacity = "1";}
    else if ( kleur === 3 ) {
        blauwVlak.style.opacity = "1";}
    }

function animatie2() {
    var kleur1 = sequence[positie];
    zetUit (kleur1);
    positie = positie + 1;
    if (positie < sequence.length) {
        setTimeout (animatie, 500)}
    else {
        onklikbaar(0);
    }
}

function animatie() {
    var kleur1 = sequence[positie];//hier komt een getal uit
    zetAan (kleur1);// dit wordt het getal van kleur
    setTimeout (animatie2, 500);
}

//dient tevens als restart
function start() {
    gestart = 1;
    knop.style.display = "none";
    setTimeout (animatie, 500);
    sequence = [0];
    positie = 0;
    userInput = [];
    telRonde = 1;
    ronde();
    onklikbaar(0);
}

knop.addEventListener('click', start);


function goedOfFout() {
    if (gestart === 1) {
    var boolean = true;
        for(var i = 0; i < userInput.length; i++) {
            if(sequence[i] !== userInput[i]){
            boolean = false;
            knop.style.display = "";
            knop.setAttribute("value", "You lost! restart");
            onklikbaar(1);
            }
    }
    if (boolean == true && userInput.length ===           sequence.length) {
        sequence.push(Math.floor((Math.random() * 4)));
        positie = 0;
        userInput = [];
        telRonde = telRonde + 1;
        ronde();
        onklikbaar(1);
         setTimeout (animatie, 1000);
        }
    }
}

function clickGroenUit () {
    groenVlak.style.opacity = "1";
}

function clickRoodUit () {
    roodVlak.style.opacity = "1";
}

function clickGeelUit () {
    geelVlak.style.opacity = "1";
}

function clickBlauwUit () {
    blauwVlak.style.opacity = "1";
}

function clickGroen () {
    groenVlak.style.opacity = "0.6";
    document.getElementById("c2").play();
    setTimeout (clickGroenUit, 300);
    userInput.push(0);
    goedOfFout();
}

function clickRood () {
    roodVlak.style.opacity = "0.6";
    document.getElementById("c3").play();
    setTimeout (clickRoodUit, 300);
    userInput.push(1);
    goedOfFout();
}

function clickGeel () {
    geelVlak.style.opacity = "0.6";
    document.getElementById("c4").play();
    setTimeout (clickGeelUit, 300);
    userInput.push(2);
    goedOfFout();
}

function clickBlauw () {
    blauwVlak.style.opacity = "0.6";
    document.getElementById("c5").play();
    setTimeout (clickBlauwUit, 300);
    userInput.push(3);
    goedOfFout();
}

groenVlak.addEventListener('click', clickGroen);
roodVlak.addEventListener('click', clickRood);
geelVlak.addEventListener('click', clickGeel);
blauwVlak.addEventListener('click', clickBlauw);

function onklikbaar (aan){
    if (aan === 1) {
        groenVlak.removeEventListener ("click", clickGroen);
        roodVlak.removeEventListener ("click", clickRood);
        geelVlak.removeEventListener ("click", clickGeel);
        blauwVlak.removeEventListener ("click", clickBlauw);
    }
    else {
        groenVlak.addEventListener('click', clickGroen);
        roodVlak.addEventListener('click', clickRood);
        geelVlak.addEventListener('click', clickGeel);
        blauwVlak.addEventListener('click', clickBlauw);
    }
}

/* BRONNEN:
Danny - Student wiskunde - Programmeert als hobby

ARRAYS VERGELIJKEN -  http://stackoverflow.com/questions/4025893/how-to-check-identical-array-in-most-efficient-way

VOORBEELD: https://codeplanet.io/building-simon-says-javascript/

AUDIO: http://stackoverflow.com/questions/9419263/playing-audio-with-javascript

DELETE EVENT LISTENER
https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener
*/

