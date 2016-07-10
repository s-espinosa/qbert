function UserInput(params){
  this.level   = params['level'];
  this.player  = params['player'];
  this.context = params['context'];
  this.canvas  = params['canvas'];
}

UserInput.prototype.setInput = function() {
  window.addEventListener("keydown", keyPress, false);

  var level   = this.level;
  var player  = this.player;
  var context = this.context;
  var canvas  = this.canvas;

  function keyPress(e) {
    var code = e.keyCode;
    if (code === 72) {
        player.downRight();
    } else if (code === 71) {
        player.downLeft();
    } else if (code === 84) {
        player.upLeft();
    } else if (code === 89) {
        player.upRight();
    }

    if (player.position != null) {
      level.activateCube(player.position);
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
  }
};

module.exports = UserInput;
