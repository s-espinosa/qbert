var assert = require('chai').assert;
var Ball = require('../lib/ball');

describe('Ball', function(){
  context('when initialized', function(){
    var ball = new Ball({});

    it('defaults to the top cube', function(){
      assert.equal(ball.position, 0);
    });
  }); 

context('movement', function(){
    var ball = new Ball({});

    it('moves to the assigned cube', function(){
      assert.equal(ball.position, 0);
      
      ball.move(12);

      assert.equal(ball.position, 12);
    });
  });

});
