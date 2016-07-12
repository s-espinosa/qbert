var assert = require('chai').assert;
var Game = require('../lib/game');
var sinon = require('sinon');


describe('Game', function(){
  context('when initialized', function(){
    var ball = new Game({});

    it('instantiates with a board', function(){
      assert.equal(this.board, 0);
    });

    it('defaults to alive', function(){
      assert.equal(ball.alive, true);
    });
  
  }); 
});