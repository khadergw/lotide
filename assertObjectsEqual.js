const eqObjects = function(object1, object2) {

  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  for(let item in object1){
    if (typeof object1[item] === 'object' && object1[item] !== null) {
      if (!eqObjects(object1[item], object2[item])) return false;
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};
////////////////

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
console.log(`Example label: ${inspect(actual)}`);

const eqObjects = require('eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return console.log(`Assertion Failed: ${inspect(actual)} does not equal ${inspect(expected)}`);
  } else {
    return console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual();