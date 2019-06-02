const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static(__dirname + '/dist/front'));
app.use(bodyParser.json());

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/dist/front/" + "index.html");
});

app.post("/coffee-type", function (req, res) {
  let res_serv2;
  let data = JSON.stringify(req.body);
  let options = {
    url: 'http://localhost:8080//coffee-type',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  };
  request.post(options, function (error, response, body) {
    console.log(body);
    res.send(body);
    res.end();
    });
});

app.get("/coffee-type", function (req, res) {

  request.get("http://localhost:8080//coffee-type")
    .on( 'data', function (response) {
      console.log(JSON.parse(response));
      res.send(JSON.parse(response));
    })

});

let port_8081 = app.listen(8081, function () {
  let port = port_8081.address().port;

  console.log("app listening at %s", port);
});




