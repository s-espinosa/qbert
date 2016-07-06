var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

function drawCube(x,y) {
  // top plane
    context.beginPath();
    context.moveTo(x, y);
      // draw right side
    context.lineTo(x+18, y+6);
      // draw down to center
    context.lineTo(x, y+12);
      // draw left
    context.lineTo(x-18, y+6);
    context.fillStyle="#3B6D80";
    context.fill();
  // right plane
    context.beginPath();
    context.moveTo(x, y+12);
    context.lineTo(x, y+30);
    context.lineTo(x+18, y+24);
    context.lineTo(x+18, y+6);
    context.fillStyle="#47528B";
    context.fill();
  // left plane
    context.beginPath();
    context.moveTo(x, y+12);
    context.lineTo(x, y+30);
    context.lineTo(x-18, y+24);
    context.lineTo(x-18, y+6);
    context.fillStyle="#529A68";
    context.fill();
};

var origin = {
  x: 200,
  y: 20
};

var constants = {
  X: 18,
  Y: 24
}

var rowOne = drawCube(origin.x, origin.y);

var rowThree = {
  center: drawCube(origin.x, origin.y+(constants.Y*2)),
  left: drawCube(origin.x-(constants.X*2), origin.y+(constants.Y*2)),
  right: drawCube(origin.x+(constants.X*2), origin.y+(constants.Y*2))
};
var rowFive = {
  center: drawCube(origin.x, origin.y+(constants.Y*4)),
  leftOne: drawCube(origin.x-(constants.X*2), origin.y+(constants.Y*4)),
  leftTwo: drawCube(origin.x-(constants.X*4), origin.y+(constants.Y*4)),
  rightOne: drawCube(origin.x+(constants.X*2), origin.y+(constants.Y*4)),
  rightTwo: drawCube(origin.x+(constants.X*4), origin.y+(constants.Y*4))
};
var rowSeven = {
  center: drawCube(origin.x, origin.y+(constants.Y*6)),
  leftOne: drawCube(origin.x-(constants.X*2), origin.y+(constants.Y*6)),
  leftTwo: drawCube(origin.x-(constants.X*4), origin.y+(constants.Y*6)),
  leftThree: drawCube(origin.x-(constants.X*6), origin.y+(constants.Y*6)),
  rightOne: drawCube(origin.x+(constants.X*2), origin.y+(constants.Y*6)),
  rightTwo: drawCube(origin.x+(constants.X*4), origin.y+(constants.Y*6)),
  rightThree: drawCube(origin.x+(constants.X*6), origin.y+(constants.Y*6))
};

var rowTwo = {
  left: drawCube(origin.x-constants.X, origin.y+constants.Y),
  right: drawCube(origin.x+constants.X, origin.y+constants.Y)
};
var rowFour = {
  leftOne: drawCube(origin.x-constants.X, origin.y+(constants.Y*3)),
  leftTwo: drawCube(origin.x-(constants.X*3), origin.y+(constants.Y*3)),
  rightOne: drawCube(origin.x+constants.X, origin.y+(constants.Y*3)),
  rightTwo: drawCube(origin.x+(constants.X*3), origin.y+(constants.Y*3))
};
var rowSix = {
  leftOne: drawCube(origin.x-constants.X, origin.y+(constants.Y*5)),
  leftTwo: drawCube(origin.x-(constants.X*3), origin.y+(constants.Y*5)),
  leftThree: drawCube(origin.x-(constants.X*5), origin.y+(constants.Y*5)),
  rightOne: drawCube(origin.x+constants.X, origin.y+(constants.Y*5)),
  rightTwo: drawCube(origin.x+(constants.X*3), origin.y+(constants.Y*5)),
  rightThree: drawCube(origin.x+(constants.X*5), origin.y+(constants.Y*5))
};

function cube (id, upLeftId, upRightId, downleftId, downRightId) {
  this.active = false;
  this.id = id;
  this.upperLeft = upLeftId;
  this.upperRight = upRightId;
  this.lowerLeft = downleftId;
  this.lowerRight = downRightId;
};

var cubeZero = new cube (0, null, null, rowTwo.left, rowTwo.right);
var cubeOne = new cube (1, null, rowOne, rowThree.left, rowThree.center);
var cubeTwo = new cube(2, rowOne, null, rowThree.center, rowThree.right);
