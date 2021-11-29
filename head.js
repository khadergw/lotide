const assertEqual = require('./assertEqual');
//const errormsg = 'failed'
// const assertEqual = function(actual, expected) {
//   console.assert(actual===expected, {actual:expected}, 'failed')
// };



const head = function(array) {
  return array[0];
}

module.exports = head;

