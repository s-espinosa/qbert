function Qbert(params) {
  this.lives = 3;
  this.position = 0
  this.board = params['board'];
  this.context = params['context'];
}

Qbert.prototype.onCube = function(){
    return this.board.cubes[this.position] || this.board.cubes[0];
}

Qbert.prototype.draw = function(pos) {
	var occupied = this.onCube(pos);
	this.context.fillStyle = '#ff66ff';
	this.context.fillRect(occupied.x-10, occupied.y-10, 20, 20);
};

Qbert.prototype.move = function(position) {
  if (position === null) {
    this.position = 0;
    // qbert position returns to top -- want to redraw canvas, but need to check how restart is implemented, if already done so?
    // check number of lives left; if no more life, then game over
    // set delay to return to position zero
    // animate fall before reappearing
  } else {
    this.position = position;
    // keep score
  }
}

Qbert.prototype.fallsFromGrace = function(){
  // need coordinates or starting position to know when to start drawing fall
  // window.requestAnimationFrame
}

module.exports = Qbert;
