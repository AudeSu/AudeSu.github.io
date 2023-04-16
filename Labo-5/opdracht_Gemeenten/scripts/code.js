const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let gemeenten = [];
    let gemeente = '';
    while(gemeente.localeCompare('stop')) {
        gemeente = window.prompt('Gemeente:', 'stop');
        if(gemeente.localeCompare('stop')) {
            gemeenten.push(gemeente);
        }
    }
    gemeenten.sort();
    for(let gemeente of gemeenten) {
        let option = document.createElement('option');
        option.text = gemeente;
        document.getElementById('gemeenten').add(option);
    }
}

window.addEventListener('load', setup);