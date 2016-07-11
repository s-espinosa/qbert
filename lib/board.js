var Cube = require('./cube');

function Board(params) {
  this.cubes = [];
  this.level = params['level'];
  this.context = params['context'];
  this.qbert = params['qbert'];
  this.score = params['score'];
}

Board.prototype.initializeCubes = function() {
  for(var i = 0; i < 7; i++){
    for(var j = 0; j <= i; j++) {
      var newParams = {
        id: this.cubes.length,
        x: 450 - i*40 + j*80,
        y: 180 + i*60,
        upLeftId: j > 0 ? this.cubes.length - i - 1 : null,
        upRightId: j < i ? this.cubes.length - i : null,
        downLeftId: this.cubes.length + (i + 1) <= 27 ? this.cubes.length + (i + 1) : null,
        downRightId: this.cubes.length + (i + 2) <= 27 ? this.cubes.length + (i + 2) : null,
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
  var content = this.drawLevel + "<br>" + this.drawScore;
  scoreDiv.innerHTML= content
}

// Board.prototype.drawScore = function(){
//    var scoreDiv = document.getElementById('scoreboard');
//   var content = "SCORE: " + this.score.total
//   scoreDiv.innerHTML= content
//   // return "Score: " + this.score.total
// }

// Board.prototype.drawLevel = function(){
//   return "Level: " + this.level
// }

Board.prototype.activateCube = function(id){
    this.score.increase(25);
    this.cubes[id].active = true;
    this.cubes[id].drawCube();
};

module.exports = Board;
