const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let tekst1 = 'Gisteren zat de jongen op de stoep en at de helft van de appel';
    let tekst2 = 'de man riep de';
    de_naar_het(tekst1);
    de_naar_het(tekst2);
}

de_naar_het = (tekst) => {
    while(tekst.includes('de')) {
        let index = tekst.indexOf('de');
        tekst = tekst.slice(0, index) + 'het' + tekst.slice(index + 2);
    }
    console.log(tekst);
}

window.addEventListener('load', setup);