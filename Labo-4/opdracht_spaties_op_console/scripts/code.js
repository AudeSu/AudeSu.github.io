const setup = () => {
    const input = document.getElementById('tekst-input');
    const button = document.getElementById('tekst-button');

    button.addEventListener('click', () => {
        const tekst = input.value;
        const spaties = tekst.split('').join(' ');
        console.log(spaties);
    });
}
window.addEventListener('load', setup);