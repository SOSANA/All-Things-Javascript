/* eslint-disable */
'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express listening on port 3000');
});
