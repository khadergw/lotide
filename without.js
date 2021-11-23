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

//////////////

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

///////////////

//var source = [1,2,3,4,5,6]
//var itemsToRemove=source.splice(0,1) //// returns [1,2]

function without(source,itemsToRemove){
  
  const newArray = [];
  for(let i=0; i< source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      newArray.push(source[i])
    }
  }
  return newArray;
}


assertArraysEqual (without([1, 2, 3], [1]) ,[2, 3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world"]);