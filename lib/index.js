var canvas  = document.getElementById("canvas");
var context = canvas.getContext('2d');
var Board   = require('./board');
var Qbert   = require('./qbert');

var level1 = new Board({context: context});
var qbert  = new Qbert({board: level1})

window.addEventListener('keydown', check, false);
level1.initializeCubes();
level1.cubes[0].active = true;
level1.drawCubes();

function check(e) {
  var code            = e.keyCode;
  var currentPosition = qbert.position;
  var cube            = level1.cubes[currentPosition]
  if (code === 84) {
    qbert.move(cube.upLeftId);
  } else if (code === 89) {
    qbert.move(cube.upRightId)
  } else if (code === 71) {
    qbert.move(cube.downLeftId);
  } else if (code === 72) {
    qbert.move(cube.downRightId);
  }
}
