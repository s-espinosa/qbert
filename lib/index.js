var canvas  = document.getElementById("canvas");
var context = canvas.getContext('2d');
var Board   = require('./board');

var level1 = new Board({context: context});

level1.initializeCubes();
level1.drawCubes();

let KEY = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

// start with Player at position, status of starting cube remains not active
function Player(){
  this.startingPosition = level1.cubes[0];
};

// Player moves down
Player.prototype.moveDown = function(){
  canvas.addEventListener('keydown', function(event){
    if (event.keyCode === KEY.DOWN) {
      return activateCube(this.startingPosition.downLeftId);
    }
  });

  function activateCube(cube){
    cube.active = true;
    cube.drawCube();
  };

  function cubeInactive(cube){
    if (cube.active === true) { return true };
  };
};

var Game = function(){
  this.start = new Player();
};

Game.start();
