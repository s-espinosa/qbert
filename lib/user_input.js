function UserInput(params){
  this.level   = params['level'];
  this.player  = params['player'];
  this.context = params['context'];
  this.canvas  = params['canvas'];
}

UserInput.prototype.setInput = function() {
  window.addEventListener("keydown", keyPress, false);
  window.addEventListener("keyup", keyRelease, false);

  var level   = this.level;
  var player  = this.player;
  var context = this.context;
  var canvas  = this.canvas;
  var tKey    = document.getElementById("t");
  var yKey    = document.getElementById("y");
  var gKey    = document.getElementById("g");
  var hKey    = document.getElementById("h");

  function keyPress(e) {
    var code = e.keyCode;
    if (code === 72) {
      player.downRight();
      hKey.style.backgroundColor = '#47528B';
    } else if (code === 71) {
      player.downLeft();
      gKey.style.backgroundColor = '#47528B';
    } else if (code === 84) {
      player.upLeft();
      tKey.style.backgroundColor = '#47528B';
    } else if (code === 89) {
      player.upRight();
      yKey.style.backgroundColor = '#47528B';
    }

    if (player.position != null) {
      level.activateCube(player.position);
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
  }

  function keyRelease(e) {
    var code = e.keyCode;

    if (code === 72) {
      hKey.style.backgroundColor = 'black';
    } else if (code === 71) {
      gKey.style.backgroundColor = 'black';
    } else if (code === 84) {
      tKey.style.backgroundColor = 'black';
    } else if (code === 89) {
      yKey.style.backgroundColor = 'black';
    }
  }
};

module.exports = UserInput;
