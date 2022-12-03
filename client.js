const express = require('express');
const app = express();
const soap = require('soap');
app.use(express.static(__dirname + "/public"));
const url = 'http://localhost:3030/bmicalculator?wsdl';
const args = { weight: 65.7, height: 1.63 };
soap.createClient(url, function(err, client) {
  if (err) console.error(err);
  else {
    client.calculateBMI(args, function(err, response) {
    //client.calculateC(args, function(err, response) {
      if (err) console.error(err);
      else {
        console.log(response);
        //res.send(response);
      }
    });
  }
});
app.listen(8000, function(){
  console.log("Сервер ожидает подключения...");
});