const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById("btnIndexOf").addEventListener('click', metIndexOf)
    document.getElementById("btnLastIndexOf").addEventListener('click', metLastIndexOf)
}

const zin = "De man van An geeft geen hand aan ambetante verwanten";
const zoek = "an";

const metIndexOf = () => {
    let aantal = 0;
    let deelZin = zin;
    let index = deelZin.indexOf(zoek);
    while(index !== -1) {
        if(index !== -1) {
            aantal ++;
            deelZin = deelZin.substring(index + zoek.length);
            index = deelZin.indexOf(zoek);
        }
    }
    console.log(aantal);
}

const metLastIndexOf = () => {
    let aantal = 0;
    let deelZin = zin;
    let index = deelZin.lastIndexOf(zoek);
    while(index !== -1) {
        if(index !== -1) {
            aantal ++;
            deelZin = deelZin.substring(0, index);
            index = deelZin.lastIndexOf(zoek);
        }
    }
    console.log(aantal);
}

window.addEventListener('load', setup);