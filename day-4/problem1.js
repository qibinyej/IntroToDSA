// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5] // [1, 2, [3, 4], [[5]]] // arr.flat(2) - [1,2,3,4,[5]], arr.flat(3)
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatTheArray = (arr) => {
  //recursion step 1: edge case
  if (arr.length == 0) {
    return -1;
  }

  //step 2: base case
 
  for(let i =0; i< arr.length; i++){
    if(Array.isArray(arr[i])){
        arr[i].flat
    }
  }

};
