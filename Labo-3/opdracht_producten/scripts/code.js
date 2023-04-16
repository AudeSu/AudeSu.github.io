const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById('btnHerbereken').addEventListener('click', update)
    update();
}

const update = () => {
    let prijzen = document.getElementsByClassName('lblPrijs');
    let aantallen = document.getElementsByClassName('lblAantal');
    let btws = document.getElementsByClassName('lblBtw');
    let subtotalen = document.getElementsByClassName('lblSubtotaal');
    let lblTotaal = document.getElementById('lblTotaal');
    let totaal = 0;

    for(let i = 0; i < prijzen.length; i ++) {
        let subtotaal = parseFloat(prijzen[i].innerHTML) * aantallen[i].value * (1 + parseFloat(btws[i].innerHTML) / 100);
        subtotalen[i].innerHTML = subtotaal.toFixed(2) + ' Eur';
        totaal += subtotaal;
    }

    lblTotaal.innerHTML = totaal.toFixed(2) + ' Eur';
}

window.addEventListener('load', setup);