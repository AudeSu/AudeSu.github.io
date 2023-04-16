const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById('btnValideer').addEventListener('click', valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById('txtVoornaam');
    let errVoornaam = document.getElementById('errVoornaam');
    let voornaam = txtVoornaam.value.trim();
    if(voornaam.length > 30) {
        txtVoornaam.className = 'invalid'; // invalid class instellen
        errVoornaam.innerHTML = 'max. 30 karakters';
    } else {
        txtVoornaam.className = ''; // alle classes verwijderen
        errVoornaam.innerHTML = '';
    }
}

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById('txtFamilienaam');
    let errFamilienaam = document.getElementById('errFamilienaam');
    let familienaam = txtFamilienaam.value.trim();
    if(familienaam.length === 0) {
        txtFamilienaam.className = 'invalid'; // invalid class instellen
        errFamilienaam.innerHTML = 'verplicht veld';
    }
    else if(familienaam.length > 30) {
        txtFamilienaam.className = 'invalid'; // invalid class instellen
        errFamilienaam.innerHTML = 'max. 50 karakters';
    } else{
        txtFamilienaam.className = ''; // alle classes verwijderen
        errFamilienaam.innerHTML = '';
    }
}

const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.getElementById('txtGeboortedatum');
    let errGeboortedatum = document.getElementById('errGeboortedatum');
    let geboortedatum = txtGeboortedatum.value.trim();
    if(geboortedatum.length === 0) {
        txtGeboortedatum.className = 'invalid'; // invalid class instellen
        errGeboortedatum.innerHTML = 'verplicht veld';
    }
    else if(geboortedatum.length !== 10
            || geboortedatum.charAt(4) !== '-'
            || geboortedatum.charAt(7) !== '-'
            || !isGetal(geboortedatum.slice(0, 4))
            || !isGetal(geboortedatum.slice(5, 7))
            || !isGetal(geboortedatum.slice(8, 10))) {
        txtGeboortedatum.className = 'invalid'; // invalid class instellen
        errGeboortedatum.innerHTML = 'formaat is niet jjjj‐mm‐dd';
    } else{
        txtGeboortedatum.className = ''; // alle classes verwijderen
        errGeboortedatum.innerHTML = '';
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById('txtEmail');
    let errEmail = document.getElementById('errEmail');
    let email = txtEmail.value.trim();
    console.log(email.slice(1, email.length - 1))
    if(email.length === 0) {
        console.log(email)
        txtEmail.className = 'invalid'; // invalid class instellen
        errEmail.innerHTML = 'verplicht veld';
    }
    else if(email.length < 3
            || !email.slice(1, email.length - 1).includes('@')
            || email.slice(1, email.length - 1).indexOf('@')
            !== email.slice(1, email.length - 1).lastIndexOf('@')) {
        txtEmail.className = 'invalid'; // invalid class instellen
        errEmail.innerHTML = 'geen geldig email adres';
    } else {
        txtEmail.className = ''; // alle classes verwijderen
        errEmail.innerHTML = '';
    }
}

const valideerAantalKinderen = () => {
    let txtAantal_kinderen = document.getElementById('txtAantal_kinderen');
    let errAantal_kinderen = document.getElementById('errAantal_kinderen');
    let aantal_kinderen = parseInt(txtAantal_kinderen.value.trim());
    if(isNaN(aantal_kinderen) || aantal_kinderen < 0) {
        txtAantal_kinderen.className = 'invalid'; // invalid class instellen
        errAantal_kinderen.innerHTML = 'is geen positief getal';
    } else if(aantal_kinderen > 99) {
        txtAantal_kinderen.className = 'invalid'; // invalid class instellen
        errAantal_kinderen.innerHTML = 'is te vruchtbaar';
    } else {
        txtAantal_kinderen.className = ''; // alle classes verwijderen
        errAantal_kinderen.innerHTML = '';
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener('load', setup);