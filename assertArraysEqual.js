const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');


// const assertEqual = function(actual, expected) {
//   console.assert(actual===expected, {actual:expected}, 'failed')
// };

// function eqArrays(arr1, arr2){
//   if(arr1.length==arr2.length){
//     for(var i=0;i<arr1.length;i++){
   
//       if (arr1[i]!== arr2[i]){
//         console.log("arrays are not equal")
//         return false;
//       }
   /*   else{
        console.log("arrays aren't equal")
      }*/
     
//     }
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

/////////////////////////


var arr1 = [1,2,3]
var arr2 = [1,2,3]
function assertArraysEqual(arr1, arr2){
  if (eqArrays(arr1,arr2)) {
    console.log("two arrays are equal")
  } 
  else{
    console.log("two arrays are not equal")
  }
}
  

module.exports = assertArraysEqual;
