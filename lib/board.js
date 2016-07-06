var Cube = require('./cube');

function Board(params) {
  this.cubes = [];
  this.context = params['context'];
}

Board.prototype.initializeCubes = function() {
  for(var i = 0; i < 7; i++){
    for(var j = 0; j <= i; j++) {
      var newParams = {
        id: this.cubes.length,
        x: 450 - i*40 + j*80,
        y: 180 + i*60,
        upLeftId: j > 0 ? this.cubes.length - i - 1 : null,
        upRightId: j < i ? this.cubes.length - i : null,
        downLeftId: this.cubes.length + (i + 1) <= 27 ? this.cubes.length + (i + 1) : null,
        downRightId: this.cubes.length + (i + 2) <= 27 ? this.cubes.length + (i + 2) : null,
        context: this.context
      };
      var cube = new Cube(newParams);
      this.cubes.push(cube);
    }
  }
};

Board.prototype.drawCubes = function(){
  this.cubes.forEach(function(cube){
    cube.drawCube();
    console.log("ID: " + cube.id +
               " UL: " + cube.upLeftId +
               " UR: " + cube.upRightId +
               " DL: " + cube.downLeftId +
               " DR: " + cube.downRightId
    );
  });
};

module.exports = Board;
