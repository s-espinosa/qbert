var assert = require('chai').assert;
var Qbert = require('../lib/qbert');
var Board = require('../lib/board');

describe('Qbert death', function(){
  var nullPosition = null;

  context('when position is null', function(){
    var player = new Qbert({});
    player.move(nullPosition);

    it('returns player to original position', function(){
      assert.equal(player.position, 0);
    })
  });

  context('when position is null and number of lives is not zero', function(){

    var player = new Qbert({});
    player.lives = 2;
    player.move(nullPosition);

    it('returns player to original position', function(){
      assert.equal(player.position, 0);
    });

    it('deducts number of lives', function(){
      assert.equal(player.lives, 1);
    })
  });
});
