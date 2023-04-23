const setup = () => {
    const birthdayString = prompt("Wat is je geboortedatum (jjjj-mm-dd)?");
    const birthday = new Date(birthdayString);
    const today = new Date();

    const diffTime = Math.abs(today - birthday);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log(`Aantal dagen tussen je verjaardag en vandaag: ${diffDays} dagen`);
}

window.addEventListener('load', setup);