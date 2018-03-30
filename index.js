var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! We are shipping Nodejs-Version: ' + process.version);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port:' + (process.env.PORT || 8080));
});