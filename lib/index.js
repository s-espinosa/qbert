var canvas  = document.getElementById("canvas");
var context = canvas.getContext('2d');
var Board   = require('./board');

var level1 = new Board({context: context});

level1.initializeCubes();
level1.drawCubes();
