var assert = require('chai').assert;
var Qbert = require('../lib/qbert');

describe('Qbert', function(){
  context('when initialized', function(){
    var qbert = new Qbert({});

    it('defaults to the top cube', function(){
      assert.equal(qbert.currentPosition, 0);
    });

    it('initializes with 3 lives', function(){
      assert.equal(qbert.lives, 3);
    });

  });

  // context('dying', function(){
  //   var qbert = new Qbert({});

  //   it('decrements lives when dying', function(){
  //     assert.equal(qbert.lives, 3);
      
  //     qbert.die;
  //     console.log(qbert.lives);
  //     assert.equal(qbert.lives, 2);
  //   });

    // it('cannot decrement below 0', function(){
    //   assert.equal(qbert.lives, 0)
    //   qbert.die;
    //   assert.equal(qbert.lives, 2);
    // });

  });
});
