const express = require('express');
const app = express();
const hbs = require('hbs');

let c1
let c2
let c3
let c4
let getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return temp;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad }`;
    }
}
app.use(express.static(__dirname + '/public'));
//npm install hbs --save

//Para manejar parciales
hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS Engine
app.set('view engine', 'hbs');

require('./hbs/helpers');
//para heroku
const port = process.env.PORT || 3000;

getInfo("Quito").then(res => {
    c1 = res;
}).catch(err => console.log(err));

getInfo("Guayaquil").then(res => {
    c2 = res;
}).catch(err => console.log(err));

getInfo("Moscow").then(res => {
    c3 = res;
}).catch(err => console.log(err));

getInfo("Ankara").then(res => {
    c4 = res;
}).catch(err => console.log(err));


app.get('/', function(req, res) {
    //  res.send('Hello World')
    res.render('home', {
        nombre: "diego",
        ciudad1: c1,
        ciudad2: c2

    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        ciudad3: c3,
        ciudad4: c4
    });
    //res.send('Acerca de');
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});
//1. Probar webserver
//2. introduccion a express
//3. web estatica