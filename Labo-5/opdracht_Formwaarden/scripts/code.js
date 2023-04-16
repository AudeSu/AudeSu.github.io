const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById('submit').addEventListener('click', toon)
}

const toon = () => {
    //is roker
    if(document.getElementById('is_roker').checked) {
        console.log('is roker');
    } else {
        console.log('is geen roker');
    }
    //moedertaal
    let moedertaal = 'onbekend';
    let talen = document.getElementsByName("moedertaal");
    for(let i = 0; i < talen.length; i ++) {
        if(talen[i].checked) {
            moedertaal = talen[i].value;
        }
    }
    console.log('moedertaal is ' + moedertaal);
    //favoriete buurland
    let select_buurland = document.getElementById('buurland');
    console.log('favoriete buurland is ' + select_buurland.options[select_buurland.selectedIndex].value);
    //bestellingen
    let bestelling_str = '';
    let opties = document.getElementById('bestelling').options;
    for(let i = 0; i < opties.length; i ++) {
        if(opties[i].selected) {
            bestelling_str += ' ' + opties[i].text;
        }
    }
    console.log('bestelling bestaat uit' + bestelling_str);
}

window.addEventListener('load', setup);