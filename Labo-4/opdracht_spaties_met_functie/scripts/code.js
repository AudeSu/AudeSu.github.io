const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById("btn").addEventListener("click", spaties);
}

const spaties = () => {
    console.log(maakMetSpaties(document.getElementById("txt").value));
}

const maakMetSpaties = (inputText) => {
    let result="";
    for(let i = 0; i < inputText.length; i ++) {
        result += inputText.charAt(i) + " ";
    }
    return result.substring(0, result.length - 1);
}

window.addEventListener('load', setup);