const setup = () => {
    let familieleden = ["Mama", "Papa", "Zus", "Broer", "Ik"];

    console.log(`De array bevat ${familieleden.length} elementen.`);

    console.log(`Element 1: ${familieleden[0]}`);
    console.log(`Element 3: ${familieleden[2]}`);
    console.log(`Element 5: ${familieleden[4]}`);

    function VoegNaamToe(array, naam) {
        array.push(naam);
    }

    let nieuweNaam = prompt("Geef een naam op:");

    VoegNaamToe(familieleden, nieuweNaam);

    console.log(familieleden);

    let familieledenString = familieleden.join(", ");
    console.log(`De array als string: ${familieledenString}`);
}
window.addEventListener("load", setup);