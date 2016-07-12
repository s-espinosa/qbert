var enemyPosition = function(){
  var newPosition = null;
  var newX        = null;

  var chance = Math.random();
  if (chance > 0.5) {
    newPosition = 1;
    newX        = 410;
  } else {
    newPosition = 2;
    newX        = 490;
  }
  return { position: newPosition, x: newX };
};

module.exports = enemyPosition;
