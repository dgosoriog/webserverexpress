const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static(__dirname + '/public'));
//npm install hbs --save

//Para manejar parciales
hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS Engine
app.set('view engine', 'hbs');

require('./hbs/helpers');
//para heroku
const port = process.env.PORT || 3000;
app.get('/', function(req, res) {
    //  res.send('Hello World')
    res.render('home', {
        nombre: "diego",

    });
});
app.get('/about', (req, res) => {
    res.render('about', {

    });
    //res.send('Acerca de');
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});
//1. Probar webserver
//2. introduccion a express
//3. web estatica