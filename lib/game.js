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
                               score:   this.score,
                               game:    this
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
  debugger;
  var thisDraw = this.draw;
  window.requestAnimationFrame(function(){thisDraw.drawFrame();});
};

Game.prototype.resetGame = function() {
  this.resetCubes();
  this.resetLives();
  this.resetQbert();
  this.resetCharacters();
  this.resetScore();
  this.resetDifficulty();
  this.resetTick();
  this.resetScoreboard();
  this.reanimate();
};

Game.prototype.resetLevel = function() {
  this.resetCubes();
  this.resetQbert();
  this.resetCharacters();
  this.resetTick();
};

Game.prototype.resetCubes = function(){
  this.board.cubes.forEach(function(cube){
    cube.active = false;
  });
  this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
  this.board.drawCubes();
};

Game.prototype.resetLives = function() {
  this.qbert.lives = 3;
};

Game.prototype.resetQbert = function() {
  this.qbert.currentPosition  = 0;
  this.nextPosition           = 0;
  this.qbert.x                = 450;
  this.qbert.y                = 180;
  this.targetX                = 0;
  this.xVelocity              = 0;
  this.yVelocity              = 0;
};

Game.prototype.resetCharacters = function(){
  this.draw.characters = [this.qbert];
  this.qbert.setBoard(this.board);
};

Game.prototype.reanimate = function(){
  var self = this;
  window.requestAnimationFrame(function() {
    self.draw.drawFrame();
  });
};

Game.prototype.resetScore = function(){
  this.score.reset();
};

Game.prototype.resetDifficulty = function() {
  this.draw.level     = 1;
  this.draw.enemyFreq = 500;
};

Game.prototype.resetTick = function(){
  this.draw.tick = 0;
};

Game.prototype.resetScoreboard = function(){
  var scoreDiv = document.getElementById("scoreboard");
  scoreDiv.innerHTML = "";
}

module.exports = Game;
