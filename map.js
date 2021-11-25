const words = ["ground", "control", "to", "major", "tom"];

var results1 = words.map(function(word){
  return word[0];
});
console.log(results1)
/////////////

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



var results1 = map(words, word =>word[0]);
console.log(results1)