const http = require('http');

//recibe como parametro el request y response
http.createServer((req, res) => {

    //escribir la cabecera de la respuesta
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //objeto de salida
    let salida = {
            nombre: 'Diego',
            edad: 24,
            url: req.url
        }
        //genera un formato json completo
    res.write(JSON.stringify(salida));


    //res.write("Hola Mundo desde node Js!");
    res.end();
    //va el puerto donde se va conectar
}).listen(8085);

console.log("Escuchando en el puerto 8085");
//-------------------------

//const axios = require('axios');
//const ubicacion = require('./controlador/ubicacion');
//const clima = require('./controlador/clima');
