var Cube = require('./cube');

function Board(params) {
  this.cubes = [];
  this.level = params['level'];
  this.context = params['context'];
  this.qbert = params['qbert'];
  this.score = params['score'];
}

Board.prototype.initializeCubes = function() {
  for(var row = 0; row < 7; row++){
    for(var column = 0; column <= row; column++) {
      var initialX   = 325;
      var initialY   = 60;
      var cubeWidth  = 80;
      var cubeHeight = 60;
      var cubeNumber = this.cubes.length;
      var emptyCube  = null;

      var newParams = {
        id: this.cubes.length,
        x: initialX - row*cubeWidth/2 + column*cubeWidth,
        y: initialY + row*cubeHeight,
        upLeftId: column > 0 ? cubeNumber - row - 1 : emptyCube,
        upRightId: column < row ? cubeNumber - row : emptyCube,
        downLeftId: cubeNumber + (row + 1) <= 27 ? cubeNumber + (row + 1) : emptyCube,
        downRightId: cubeNumber + (row + 2) <= 27 ? cubeNumber + (row + 2) : emptyCube,
        context: this.context
      };

      var cube = new Cube(newParams);
      this.cubes.push(cube);
    }
  }
};

Board.prototype.drawCubes = function(){
  this.cubes.forEach(function(cube){
    cube.drawCube();
  });
};

Board.prototype.drawScoreBoard = function() {
  var scoreDiv = document.getElementById('scoreboard');
  scoreDiv.innerHTML= "Score: " + this.score.total;
};

Board.prototype.activateCube = function(id){
    this.score.increase(25);
    this.cubes[id].active = true;
    this.cubes[id].drawCube();
};

module.exports = Board;
