const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

const assert = require('chai').assert;


// console.log(middle([2,3,4,0]));
// console.log(middle([2,3,4]));
// console.log(middle([2,3]));


describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
});