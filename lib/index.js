var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var Cube = require('./cube');


// CREATE CUBES //
var cubes = [];

for(var i = 0; i < 7; i++){
  for(var j = 0; j <= i; j++) {
    var newParams = {
      id: cubes.length,
      x: 450 - i*40 + j*80,
      y: 180 + i*60,
      upLeftId: j > 0 ? cubes.length - i - 1 : null,
      upRightId: j < i ? cubes.length - i : null,
      downLeftId: cubes.length + (i + 1) <= 27 ? cubes.length + (i + 1) : null,
      downRightId: cubes.length + (i + 2) <= 27 ? cubes.length + (i + 2) : null,
      context: context
    };
    var cube = new Cube(newParams);
    cubes.push(cube);
  }
}


// DRAW CUBES //
cubes.forEach(function(cube){
  cube.drawCube('inactive');
  console.log("ID: " + cube.id +
             " UL: " + cube.upLeftId +
             " UR: " + cube.upRightId +
             " DL: " + cube.downLeftId +
             " DR: " + cube.downRightId
  );
});


// DRAW SOME ACTIVE CUBES //
cubes[0].drawCube('active');
cubes[2].drawCube('active');
cubes[5].drawCube('active');
cubes[8].drawCube('active');
cubes[13].drawCube('active');
cubes[14].drawCube('active');
cubes[19].drawCube('active');
