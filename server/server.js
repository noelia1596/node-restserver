require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
//app.use SON MILWARE QUE SE LANZA CADA VEZ QUE PASA POR AQUI EL CÓDIGO
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});
app.post('/usuario', function(req, res) {

    let persona = req.body; //req.body, porque en Postman tenemos puesto en el body todos los datos que queremos que muestren

    if (persona.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona
        });
    }

});
app.put('/usuario/:id', function(req, res) { //ACTUALIZAR DATOS

    let id = req.params.id
    res.json({ //ME RETORNAS LO QUE SE MANDO EN EL URL
        id
    })
});
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
})