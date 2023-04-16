const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let listItems = document.querySelectorAll('li');
    for(let i = 0; i < listItems.length; i ++) {
        listItems[i].style.color = 'red';
    }
    let foto = document.createElement('img');
    foto.setAttribute('src', 'Images/kaart4.png');
    document.querySelector('body').appendChild(foto);
}

window.addEventListener('load', setup);