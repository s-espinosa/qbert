var assert = require('chai').assert;
var Qbert = require('../lib/qbert');

describe('Qbert', function(){
  context('when initialized', function(){
    var qbert = new Qbert({});

    it('defaults to the top cube', function(){
      assert.equal(qbert.position, 0);
    });

    it('initializes with 3 lives', function(){
      assert.equal(qbert.lives, 3);
    });

  }); 

  context('movement', function(){
    var qbert = new Qbert({});

    it('moves to the assigned cube', function(){
      assert.equal(qbert.position, 0);
      
      qbert.move(14);

      assert.equal(qbert.position, 14);
    });
  });

});
