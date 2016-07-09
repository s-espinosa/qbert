function EndGame() {
  this.endMenu = document.getElementById("end-menu");
}

EndGame.prototype.end = function(){
  console.log(this.endMenu);
  fadeIn(this.endMenu);
};

function fadeIn(element) {
  var op = 0;
  element.style.display = 'block';
  element.style.opacity = op;
  var timer = setInterval(function() {
    if (op >= 0.9) {
      clearInterval(timer);
      clearCharacter();
    }
    op += 0.1;
    console.log(op);
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=)' + op * 100 * ")";
  }, 50);
}

function clearCharacter(){
  var canvas  = document.getElementById("charCanvas");
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}


module.exports = EndGame;
