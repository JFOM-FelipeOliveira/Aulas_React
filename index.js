var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/:id', function enviar(req, res){
    res.send("The id you specified is: " + req.params.id);
});

app.get('/soma/:op1/:op2', function enviar(req, res){
    let op1 = parseInt(req.params.op1)
    let op2 = parseInt(req.params.op2)
    let result = op1 + op2
    res.send(result.toString())
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});

app.all('/hello', function(req, res){
    res.send("HTTP method All!");
});

app.listen(3000, function(req, res){
    console.log("Servidor ouvindo na posta 3000!");
});