/* eslint-disable */
'use strict';

var path = require('path');
var buildPath = path.resolve(__dirname, './public');
var mainPath = path.resolve(__dirname, './js/main.js');

module.exports = {
  entry:   mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  }
};
