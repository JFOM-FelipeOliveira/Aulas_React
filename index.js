var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');

app.use(cors());


app.get('/:op/:op1/:op2', function enviar(req, res){
    let op1 = parseInt(req.params.op1)
    let op2 = parseInt(req.params.op2)
    let op = req.params.op;
    switch(op){
        case '+':
            var result = op1 + op2;
            break;
        case '-':
            var result = op1 - op2;
            break;
        case '*':
            var result = op1 * op2;
            break;
        case 'd':
            var result = op1 / op2;
            break;
    }
    res.send(result.toString());
});

app.listen(port, function(req, res){
    console.log("Servidor ouvindo na posta 3000!");
});