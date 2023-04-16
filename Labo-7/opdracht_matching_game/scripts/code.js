let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAART_NAMEN: [
        "images/kaart1.jpeg", "images/kaart2.jpeg", "images/kaart3.jpg", "images/kaart4.png", "images/kaart5.jpeg", "images/kaart6.jpg"
    ],
    KAARTEN: [],
    isBusy: false,
    GEKOZEN: [],
    timeWait: 1000,
    AANTAL_GEVONDEN: 0
}

const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let playField = document.getElementById("playField");
    for(let id = 0; id < global.AANTAL_KAARTEN * 2; id ++) {
        let kaart = document.createElement("img");
        kaart.className = "kaart";
        kaart.id = id;
        kaart.setAttribute("src", "images/achterkant.png");
        playField.appendChild(kaart);
        kaart.addEventListener("click", verwerkClick);
        global.KAARTEN.splice(Math.floor(Math.random() * id),0 , global.KAART_NAMEN[id % global.AANTAL_KAARTEN]);
    }
}

const verwerkClick = (event) => {
    if(!global.isBusy && !event.target.classList.contains("omgedraaid")) {
        omdraaien(event);
    }
}

const wachtenGedaan = () => {
    global.isBusy = false;
    global.GEKOZEN = [];
    document.getElementById("playField").style.cursor = "auto";
}

const omdraaien = (event) => {
    global.GEKOZEN.push(event.target.id);
    event.target.classList.add("omgedraaid");
    event.target.setAttribute("src", global.KAARTEN[event.target.id]);
    if(global.GEKOZEN.length > 1) {
        global.isBusy = true;
        vergelijk();
        document.getElementById("playField").style.cursor = "wait";
        setTimeout(wachtenGedaan, global.timeWait);
    }
    if(global.AANTAL_GEVONDEN === global.AANTAL_KAARTEN) {
        setTimeout(winnen, global.timeWait);
    }
}

const winnen = () => {
    for(let id = 0; id < global.AANTAL_KAARTEN * 2; id ++) {
        document.getElementById(id).style.border = "5px solid green";
        document.getElementById(id).style.visibility = "visible";
    }
    alert("JE WINT!!");
}

const vergelijk = () => {
    let id1 = global.GEKOZEN[0];
    let id2 = global.GEKOZEN[1];
    if(global.KAARTEN[id1] === global.KAARTEN[id2]) {
        global.AANTAL_GEVONDEN ++;
        document.getElementById(id1).style.border = "5px solid green";
        document.getElementById(id2).style.border = "5px solid green";
        setTimeout(verwerkGelijk, global.timeWait);
    }
    else {
        document.getElementById(id1).style.border = "5px solid red";
        document.getElementById(id2).style.border = "5px solid red";
        setTimeout(verwerkOngelijk, global.timeWait);
    }
    setTimeout(removeBorders, global.timeWait);
}

const removeBorders = () => {
    for(let id = 0; id < global.AANTAL_KAARTEN * 2; id ++) {
        document.getElementById(id).style.border = "none";
    }
}

const verwerkGelijk = () => {
    let id1 = global.GEKOZEN[0];
    let id2 = global.GEKOZEN[1];
    document.getElementById(id1).style.visibility = "hidden";
    document.getElementById(id2).style.visibility = "hidden";
}

const verwerkOngelijk = () => {
    let id1 = global.GEKOZEN[0];
    let id2 = global.GEKOZEN[1];
    draaiTerug(id1);
    draaiTerug(id2);
}

const draaiTerug = (id) => {
    let kaart = document.getElementById(id);
    kaart.classList.remove("omgedraaid");
    kaart.setAttribute("src", "images/achterkant.png");
}

window.addEventListener('load', setup);