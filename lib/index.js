window.addEventListener("keydown", keyPress, false);

var bgCanvas  = document.getElementById("bgCanvas");
var charCanvas  = document.getElementById("charCanvas");
var bgContext = bgCanvas.getContext('2d');
var charContext = charCanvas.getContext('2d');
var Board   = require('./board');
var Qbert   = require('./qbert');

var level1 = new Board({context: bgContext});
var player1 = new Qbert({context: charContext, board: level1});

level1.initializeCubes();
level1.drawCubes();

level1.activateCube(player1.position);
player1.draw();

function keyPress(e) {
	switch(e.keyCode) {
        case 72:
            player1.moveDownRight();
			level1.activateCube(player1.position);
            charContext.clearRect(0, 0, charCanvas.width, charCanvas.height);
            player1.draw();
            break;
        case 71:
            player1.moveDownLeft();
            level1.activateCube(player1.position);
            charContext.clearRect(0, 0, charCanvas.width, charCanvas.height);
            player1.draw();
            break;
        case 84:
            player1.moveUpLeft();
            level1.activateCube(player1.position);
            charContext.clearRect(0, 0, charCanvas.width, charCanvas.height);
            player1.draw();
            break;
        case 89:
            player1.moveUpRight();
            level1.activateCube(player1.position);
            charContext.clearRect(0, 0, charCanvas.width, charCanvas.height);
			player1.draw();
            break;  
        };
};
