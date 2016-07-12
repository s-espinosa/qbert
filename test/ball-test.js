var assert = require('chai').assert;
var Cube = require('../lib/cube')
var Ball = require('../lib/ball');

describe('Ball', function(){
  context('when initialized', function(){
    var cube1 = new Cube({id: 0})
    var cube2 = new Cube({id: 1})
    var cube3 = new Cube({id: 2})
    var board = {cubes: [cube1, cube2, cube3]}
    var ball = new Ball({board: board});

    it('defaults to the second row of cubes', function(){
      assert.include([1,2], ball.currentPosition);
    });

    it('defaults to alive', function(){
      assert.equal(ball.alive, true);
    });
  
  }); 

  context('death', function(){
    var ball = new Ball({})
    it('sets alive to false when it dies', function(){
      ball.die();
      assert.equal(ball.alive, false);
    });

  });

});
