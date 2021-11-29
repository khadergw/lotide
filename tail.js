const assertEqual = require('./assertEqual');


//const errormsg = 'failed'
// const assertEqual = function(actual, expected) {
//   console.assert(actual===expected, {actual:expected}, 'failed')
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// ////////////////

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);


// const tail = function(words) {
//   let results = [];
//   for (let i = 1; i < words.length; i++) {
//     results.push(words[i]);
//   }
//   return results;
// };


const tail = function(words) {
  return words.slice(1);
};

module.exports = tail;
