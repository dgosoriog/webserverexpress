const hbs = require('hbs');
//Helpers

//Helper para obtener el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});
//Helper para capitalizar un texto
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split('');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join('');
});
