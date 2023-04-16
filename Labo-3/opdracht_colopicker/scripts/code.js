const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let sliders = document.getElementsByClassName('slider');

    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener('change', update);
        sliders[i].addEventListener('input', update);
    }
    update();
}

const update = () => {
    document.getElementById('lblRed').innerHTML = document.getElementById('sldRed').value;
    document.getElementById('lblGreen').innerHTML = document.getElementById('sldGreen').value;
    document.getElementById('lblBlue').innerHTML = document.getElementById('sldBlue').value;
    let red = document.getElementById('sldRed').value;
    let green = document.getElementById('sldGreen').value;
    let blue = document.getElementById('sldBlue').value;
    document.getElementById('swatch').style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

window.addEventListener('load', setup);