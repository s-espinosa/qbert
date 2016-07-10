var Board     = require('./board');
var Qbert     = require('./qbert');
var Ball      = require('./ball');
var UserInput = require('./user_input');
var Draw      = require('./draw');

function Start() {
  this.bgCanvas = document.getElementById('bgCanvas');
  this.bgContext = this.bgCanvas.getContext('2d');
  this.charCanvas = document.getElementById("charCanvas");
  this.charContext = this.charCanvas.getContext('2d');
  this.level = new Board({context: this.bgContext});
  this.player = new Qbert({context: this.charContext, board: this.level});
  this.ball = new Ball({context: this.charContext, board: this.level});
  this.draw = new Draw({qbert: this.player, ball: this.ball});
}

Start.prototype.startGame = function() {
  this.level.initializeCubes();
  this.level.drawCubes();
  this.player.draw();
  // var insideDraw = this.draw;
  // window.requestAnimationFrame(function(){insideDraw.drawFrame();});
  var input = new UserInput({level:  this.level,
                            player:  this.player,
                            context: this.charContext,
                            canvas:  this.charCanvas
                          });
  input.setInput();
  var game = this;
  $(function(){
        var canvas=document.getElementById("charCanvas");
        var context=canvas.getContext("2d");

         //loop function
        function loop(){

           // clear the canvas for this loop's animation
           context.clearRect(0,0,900,900);

           // draw
           game.player.draw();
           game.ball.draw();

        }          

        var enemyFall=setInterval(game.ball.descend(game.ball.position),1000);       
        var myTimer=setInterval(loop,100); 

    });
};


    

Start.prototype.resetGame = function() {
  this.player.lives = 3;
  this.level = new Board({context: this.bgContext});
  this.level.drawCubes();
  this.player.board = this.level;
  window.requestAnimationFrame(function() {this.draw.drawFrame();});
};

module.exports = Start;
