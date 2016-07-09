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
    var currentCube = level.cubes[player.position];
    if (code === 72) {
        player.move(currentCube.downRightId);
    } else if (code === 71) {
        player.move(currentCube.downLeftId);
    } else if (code === 84) {
        player.move(currentCube.upLeftId);
    } else if (code === 89) {
        player.move(currentCube.upRightId);
    }

    level.activateCube(player.position);
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
  }
};

module.exports = UserInput;
