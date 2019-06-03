const express = require('express');
const http = require('http');
const request = require('request');
const urlSpringHost = 'http://localhost:8080';
const app = express();

app.use(express.static(__dirname + '/dist/front'));


app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/dist/front/" + "index.html");
});

app.all("/*", function (req, res) {

  let url = urlSpringHost + req.url;
  req.pipe(request(url)).pipe(res);

});


let port_8081 = app.listen(8081, function () {
  let port = port_8081.address().port;

  console.log("app listening at %s", port);
});




