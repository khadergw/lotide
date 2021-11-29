const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const LotideObject = {
  head,
  tail,middle,
  assertArraysEqual,
  assertEqual,
  eqArrays
}

module.exports = {LotideObject}

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   eqArrays: eqArrays,
//   assertEqual: assertEqual,

// };

