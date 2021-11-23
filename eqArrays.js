//const errormsg = 'failed'
const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

var arr1 = [1,2,3]
var arr2 = [1,2,3]
function eqArrays(arr1, arr2){
  if (arr1 === arr2){
    console.log("true")
  }
  else{
    console.log("false")
  }
}
eqArrays(arr1, arr2)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 