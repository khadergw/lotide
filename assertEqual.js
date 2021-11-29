
const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};


module.exports = assertEqual;

