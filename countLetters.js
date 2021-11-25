const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};

const countLetters = function(string){
  let result = {};
  for(let letter of string){
    if(result[letter] == undefined){
      result[letter] = 1;
      }
      else{
        result[letter] += 1;
      } 
  }
  return output;
};
console.log(countLetters("hi There"));
