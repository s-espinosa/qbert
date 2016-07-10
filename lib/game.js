var Board     = require('./board');
var Qbert     = require('./qbert');
var Ball      = require('./ball');
var UserInput = require('./user_input');
var Draw      = require('./draw');

function Game() {
  this.bgCanvas    = document.getElementById('bgCanvas');
  this.charCanvas  = document.getElementById("charCanvas");
  this.bgContext   = this.bgCanvas.getContext('2d');
  this.charContext = this.charCanvas.getContext('2d');
  this.board       = new Board({context: this.bgContext});
  this.qbert       = new Qbert({context: this.charContext, board: this.board});
  this.ball        = new Ball({context: this.charContext, board: this.board});
  this.draw        = new Draw({qbert:   this.qbert,
                               context: this.charContext,
                               canvas:  this.charCanvas
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
  this.qbert.lives = 3;
  this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
  this.board.cubes.forEach(function(cube){
    cube.active = false;
  });
  this.board.drawCubes();
  this.qbert.setBoard(this.board);
  var self = this;
  window.requestAnimationFrame(function() {
    self.draw.drawFrame();
  });
};

module.exports = Game;
