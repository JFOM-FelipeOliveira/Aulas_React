const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
 
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/resul', function(req, res){
  let op1 = parseInt(req.query.op1);
  let op2 = parseInt(req.query.op2);
  let op = req.query.op;
  
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
  res.send(`${result}`);
})



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('Running at Port 3000');