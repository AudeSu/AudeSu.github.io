const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let woord = 'onoorbaar'
    for(let i = 0; i < woord.length - 2; i ++) {
        console.log(woord.substr(i, 3));
    }
}

window.addEventListener('load', setup);