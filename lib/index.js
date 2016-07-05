var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

function cubeIt(x,y) {
  // if ( x+18 < 300 && y+30 < 300) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x+18, y+6);
    context.lineTo(x, y+12);
    context.lineTo(x-18, y+6);
    context.fillStyle="#3B6D80";
    context.fill();
    context.beginPath();
    context.moveTo(x, y+12);
    context.lineTo(x, y+30);
    context.lineTo(x+18, y+24);
    context.lineTo(x+18, y+6);
    context.fillStyle="#47528B";
    context.fill();
    context.beginPath();
    context.moveTo(x, y+12);
    context.lineTo(x, y+30);
    context.lineTo(x-18, y+24);
    context.lineTo(x-18, y+6);
    context.fillStyle="#529A68";
    context.fill();
  //   cubeIt(x+18, y+24);
  // }
};
cubeIt(150, 20);
cubeIt(132, 44);
cubeIt(168, 44);

// y coordinate tells row
// x coordinate tells direction within row


var cube = function(id, upLeftId, upRightId, downLeftId, downRightId){
  this.active: false,
  this.id: id,
  this.upperLeft: upLeftId,
  this.upperRight: upRightId,
  this.lowerLeft: downLeftId,
  this.lowerRight: downRightId
};

var origin = new cube (0, null, null, blah, blah);

var cubes = [];
