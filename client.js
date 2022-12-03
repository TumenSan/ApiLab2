const express = require('express');
const app = express();
const jsonParser = express.json();
const soap = require('soap');
app.use(express.static(__dirname + "/public"));
const url = 'http://localhost:3030/bmicalculator?wsdl';
const args = { weight: 65.7, height: 1.63 };


app.post('/signup', jsonParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
      
  const userLogin = req.body.name;
  const userPassword = req.body.password;
  args.weight = userLogin;
  args.height = userPassword;
  
  soap.createClient(url, function(err, client) {
    if (err) console.error(err);
    else {
      client.calculateBMI(args, function(err, response) {
      //client.calculateC(args, function(err, response) {
        if (err){ console.error(err); }
        else {
          console.log(response);
          //res.send('good');
          res.send(response);
        }
      });
    }
  });
});

app.post('/users', jsonParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
      
  const userLogin = req.body.name;
  const userPassword = req.body.password;
  args.weight = userLogin;
  args.height = userPassword;
  
  soap.createClient(url, function(err, client) {
    if (err) console.error(err);
    else {
      client.calculateC(args, function(err, response) {
      //client.calculateC(args, function(err, response) {
        if (err){ console.error(err); }
        else {
          console.log(response);
          //res.send('good');
          res.send(response);
        }
      });
    }
  });
});

app.listen(8000, function(){
  console.log("Сервер ожидает подключения...");
});