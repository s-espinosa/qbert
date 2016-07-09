var Board     = require('./board');
var Qbert     = require('./qbert');
var UserInput = require('./user_input');

function Start() {}

Start.prototype.startGame = function() {
  var bgCanvas    = document.getElementById("bgCanvas");
  var bgContext   = bgCanvas.getContext('2d');
  var charCanvas  = document.getElementById("charCanvas");
  var charContext = charCanvas.getContext('2d');

  var level1 = new Board({context: bgContext});
  var player = new Qbert({context: charContext, board: level1});

  level1.initializeCubes();
  level1.drawCubes();
  player.draw();

  var input = new UserInput({level:  level1,
                            player:  player,
                            context: charContext,
                            canvas:  charCanvas
                          });
  input.setInput();
};

module.exports = Start;
