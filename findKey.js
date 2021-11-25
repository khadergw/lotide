const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};


const findKey = function(object, callback) {
  //let result = [];
  for(let key in object){
    if (callback(object[key]==true)) {
      return key;
    }
    else{
      return undefined;
    }
  }
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)