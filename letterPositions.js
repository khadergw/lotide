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
};
//////////////////////
function assertArraysEqual(arr1, arr2){
  if (eqArrays(arr1,arr2)) {
    console.log("two arrays are equal")
  } 
  else{
    console.log("two arrays are not equal")
  }
};
/////////////////////

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    if(results[sentence[i]] == undefined){
      results[sentence[i]] = [i];
    }
    else{
      results[sentence[i]].push(i);
    }
  }

  return results;
};

console.log(letterPositions("hello there"));
assertArraysEqual(letterPositions("hello").e, [1]);

