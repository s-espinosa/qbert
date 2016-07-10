var Board     = require('./board');
var Qbert     = require('./qbert');
var Ball      = require('./ball');
var UserInput = require('./user_input');
var Draw      = require('./draw');
var Score     = require('./score');

function Game() {
  this.bgCanvas    = document.getElementById('bgCanvas');
  this.charCanvas  = document.getElementById("charCanvas");
  this.bgContext   = this.bgCanvas.getContext('2d');
  this.charContext = this.charCanvas.getContext('2d');
  this.score       = new Score();
  this.board       = new Board({context: this.bgContext, score: this.score});
  this.qbert       = new Qbert({context: this.charContext, board: this.board});
  this.ball        = new Ball({context: this.charContext, board: this.board});
  this.draw        = new Draw({qbert:   this.qbert,
                               context: this.charContext,
                               canvas:  this.charCanvas,
                               board:   this.board,
                               score:   this.score
                             });
}

Game.prototype.setInput = function() {
  var input = new UserInput({level:  this.board,
                            player:  this.qbert,
                            context: this.charContext,
                            canvas:  this.charCanvas
                          });
  input.setInput();
};

Game.prototype.startGame = function() {
  this.board.initializeCubes();
  this.board.drawCubes();
  var thisDraw = this.draw;
  window.requestAnimationFrame(function(){thisDraw.drawFrame();});
};

Game.prototype.resetGame = function() {
  this.resetCubes();
  this.resetCharacters();
  this.resetScore();
  this.resetTick();
  this.reanimate();
};

// get rid of enemies and qbert
Game.prototype.resetCharacters = function(){
  this.qbert.lives = 3;
  console.log("qbert lives:", this.qbert.lives);
  this.characters = [this.qbert];
  console.log(this.characters.length);
  this.qbert.setBoard(this.board);
  console.log(this.qbert.board);
}

// reset blocks
Game.prototype.resetCubes = function(){
  this.board.cubes.forEach(function(cube){
    cube.active = false;
  });
  this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
  this.board.drawCubes();
}

// reanimate
Game.prototype.reanimate = function(){
  var self = this;
  window.requestAnimationFrame(function() {
    self.draw.drawFrame();
  });

}
// reset score
Game.prototype.resetScore = function(){
  this.score.reset();
}

Game.prototype.resetTick = function(){
  this.draw.tick = 0;
}

module.exports = Game;
