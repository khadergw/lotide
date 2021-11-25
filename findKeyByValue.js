const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};
/////////////////

const findKeyByValue = function(obj,val){
  let key = undefined;
  for(let show in obj){
    if(obj[show] === val){
      key = show;
    }
  }
  return key;
}







const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
