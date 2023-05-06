const storeSliderValues = () => {
    localStorage.setItem("data-red", document.getElementById("sldRed").value);
    localStorage.setItem("data-green", document.getElementById("sldGreen").value);
    localStorage.setItem("data-blue", document.getElementById("sldBlue").value);
};

const restoreSliderValues = () => {
    document.getElementById('sldRed').value = localStorage.getItem('data-red');
    document.getElementById('sldGreen').value = localStorage.getItem('data-green');
    document.getElementById('sldBlue').value = localStorage.getItem('data-blue');
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let swatchComponents = document.getElementById("swatchComponents");
    for(let i = 0; i < swatchComponents.childNodes.length; i ++) {
        let swatch = swatchComponents.childNodes[i];
        swatches.push({
            red: swatch.getAttribute('data-red'),
            green: swatch.getAttribute('data-green'),
            blue: swatch.getAttribute('data-blue')
        });
    }
    localStorage.setItem("data-swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem('data-swatches'));
    for(let i = 0; i < swatches.length; i ++) {
        console.log(swatches[i].red + swatches[i].green + swatches[i].blue)
        addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
    }
};
