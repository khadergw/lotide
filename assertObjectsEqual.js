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
  const inspect = require('item').inspect;
};

assertObjectsEqual({ a: '3', b: 5 }, { b: 5, a: '3' })
console.log(`Label: ${inspect(actual)}`);

const eqObjects = require('eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('item').inspect;
  if (!eqObjects(actual, expected)) {
    return console.log(`Failed! actual and expected are not equal`);
  } else {
    return console.log(`Passed!!`);
  }
};

assertObjectsEqual();
