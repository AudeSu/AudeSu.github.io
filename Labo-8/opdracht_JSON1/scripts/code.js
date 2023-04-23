const setup = () => {
    const student1 = {
        naam: 'Jan Janssens',
        geboortedatum: new Date('2000-01-01'),
        studentnummer: 'r123456',
    };

    console.log(JSON.stringify(student1));
}

window.addEventListener('load', setup);