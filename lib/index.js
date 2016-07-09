
var bgCanvas  = document.getElementById("bgCanvas");
var charCanvas  = document.getElementById("charCanvas");
var bgContext = bgCanvas.getContext('2d');
var charContext = charCanvas.getContext('2d');

var Board  = require('./board');
var Qbert  = require('./qbert');
var Ball  = require('./ball');

var level1 = new Board({context: bgContext});
var player1 = new Qbert({context: charContext, board: level1});
var enemy1 = new Ball({context: charContext, board: level1})

level1.initializeCubes();
level1.drawCubes();

player1.draw();
enemy1.descend(0);

window.addEventListener("keydown", keyPress, false);

function keyPress(e) {
    var code = e.keyCode;
    var currentCube = level1.cubes[player1.position];
    if (code === 72) {
        player1.move(currentCube.downRightId);
    } else if (code === 71) {
        player1.move(currentCube.downLeftId);
    } else if (code === 84) {
        player1.move(currentCube.upLeftId);
    } else if (code === 89) {
        player1.move(currentCube.upRightId);
    } 

    level1.activateCube(player1.position);
    charContext.clearRect(0, 0, charCanvas.width, charCanvas.height);
    player1.draw();
};
