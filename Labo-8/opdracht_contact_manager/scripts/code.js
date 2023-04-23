let personen = [];
let index = -1;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
    if(document.getElementsByClassName("invalid").length === 0) {
        let voornaam = document.getElementById("txtVoornaam").value;
        let familienaam = document.getElementById("txtFamilienaam").value;
        let geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        let email = document.getElementById("txtEmail").value;
        let aantalKinderen = document.getElementById("txtAantalKinderen").value;
        // een nieuw aangemaakte persoon voegen we toe
        if (index === -1) {
            personen.push({
                voornaam: voornaam,
                familienaam: familienaam,
                geboorteDatum: geboorteDatum,
                email: email,
                aantalKinderen: aantalKinderen
            });
            let option = document.createElement("option");
            index = personen.length - 1;
            option.id = index;
            option.addEventListener("click", toonPersoon);
            document.getElementById("lstPersonen").appendChild(option);
        }
        // een bestaande persoon in de lijst passen we aan
        else {
            personen[index].voornaam = voornaam;
            personen[index].familienaam = familienaam;
            personen[index].geboorteDatum = geboorteDatum;
            personen[index].email = email;
            personen[index].aantalKinderen = aantalKinderen;
        }
        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
        document.getElementById(index).innerHTML = voornaam + " " + familienaam;
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    index = -1;
    document.getElementById("formPersoon").reset();
};

const toonPersoon = (event) => {
    index = event.target.id;
    document.getElementById("txtVoornaam").value = personen[index].voornaam;
    document.getElementById("txtFamilienaam").value = personen[index].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[index].geboorteDatum;
    document.getElementById("txtEmail").value = personen[index].email;
    document.getElementById("txtAantalKinderen").value = personen[index].aantalKinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoon)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);