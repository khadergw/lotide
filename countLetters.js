const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};

const countLetters = function(string){
  let output = {};
  for(let letter of string){
    if(output[letter] == undefined){
      output[letter] = 1;
      }
      else{
        output[letter] += 1;
      } 
  }
  return output;
};
console.log(countLetters("hi There"));