function Qbert(params){
  this.position = 0;
  this.board = params['board'];
}

Qbert.prototype.move = function(position) {
  if(position == null) {
    //this.die
    this.position = null;
  } else {
    console.log(position);
    this.position = position;
    this.board.cubes[position].active = true;
    this.board.cubes[position].drawCube();
  }
}

module.exports = Qbert;
