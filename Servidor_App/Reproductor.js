var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('Este es el inicio');
    console.log("Pagina de inicio...")
})

app.get('/cursos', function (req, res ) {
    res.send('esto son los cursos');
    console.log("pagina de cursos");
})

app.listen(8989);
