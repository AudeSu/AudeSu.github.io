const setup = () => {
    let student2 = JSON.parse('{"naam":"Jan Janssens","geboortedatum":"2000-01-01","studentnummer":"r123456"}');
    console.log(student2.naam);
}

window.addEventListener('load', setup);