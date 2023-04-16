const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk = true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    };

    document.write("<p>Variable 'leeftijd' is van het type: " + typeof leeftijd + "</p>");
    document.write("<p>Variable 'intrest' is van het type: " + typeof intrest + "</p>");
    document.write("<p>Variable 'isGevaarlijk' is van het type: " + typeof isGevaarlijk + "</p>");
    document.write("<p>Variable 'vandaag' is van het type: " + typeof vandaag + "</p>");
    document.write("<p>Variable 'print' is van het type: " + typeof print + "</p>");
}
window.addEventListener("load", setup);