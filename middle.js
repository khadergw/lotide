function eqArrays(arr1, arr2){
  if(arr1.length==arr2.length){
    for(var i=0;i<arr1.length;i++){
   
      if (arr1[i]!== arr2[i]){
        console.log("arrays are not equal")
        return false;
      }
     
    }
    return true;
  }
  else{
    return false;
  }
}

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

/////////////////////////

const middle = function(array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) { // even number of elements
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];

  } else if (length % 2 === 1) { // odd number of elements
    return [array[Math.floor(length / 2)]];
  }
};
console.log(middle([2,3,4,0]));
console.log(middle([2,3,4]));
console.log(middle([2,3]));