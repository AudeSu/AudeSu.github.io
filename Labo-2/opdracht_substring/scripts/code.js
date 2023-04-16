const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById("btnSubstring").addEventListener("click", getSubstring);
}

const getSubstring = () => {
    let textInput = document.getElementById("txtInput");
    let txtStartIndex = document.getElementById("txtStartIndex");
    let txtStopIndex = document.getElementById("txtStopIndex");
    let textOutput = document.getElementById("txtOutput");

    let idxBegin = parseInt(txtStartIndex.value, 10);
    let idxEinde = parseInt(txtStopIndex.value, 10);

    textOutput.innerHTML = textInput.value.substring(idxBegin, idxEinde);
}

window.addEventListener('load', setup);