const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//     res.send('Hello World')
// });
app.get('/about', (req, res) => {
    res.send('Acerca de');
});
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});
//1. Probar webserver
//2. introduccion a express
//3. web estatica