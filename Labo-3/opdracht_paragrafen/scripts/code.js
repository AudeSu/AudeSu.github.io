const setup = () => {
    var belangrijkElems = document.getElementsByClassName("belangrijk");

    for (var i = 0; i < belangrijkElems.length; i++) {
        belangrijkElems[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);
