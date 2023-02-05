/**
 * Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of
why it is.
 */

//Problem 1
function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    if (array[i] === number) {
      // O(1)
      return i;
    }
  }
  return -1;
}
//The time complexity is linear time because a for...loop is linear and conditional operation is constant, the conslidated time is linear, O(n).
//The space complexity is constant because the final value returns a integer or -1.

//problem 2
function findEachIndexOfNumber(number, array) {
  let arrayOfIndexes = [];
  array.forEach(function (element, index) {
    // O(n) array = [1,1,1,1,1,1,1]
    if (element === number) {
      // O(1)
      arrayOfIndexes.push(index); // O(1)
    }
  });
  return arrayOfIndexes;
}
//The time complexity is linear because forEach method which loops through each element of the array takes linear time to finish the operation while the conditonal statement and the push method take constant time to add an element to the end of array. The conslidated time of complexity is linear, O(n).
//The space complexity is linear because the array of indexes could have all the values of array in a worse case.

//problem 3
const array = [36, 14, 1, 7, 21];
function higherOrLower(array) {
  if (array[array.length - 1] > array[0]) {
    return "Higher";
  } else if (array[array.length - 1] < array[0]) {
    return "Lower";
  } else {
    return "Neither";
  }
}
//The time complexity is constant because the conditional operation takes constant time.
//The space complexity is constnat because it returns a fixed size string as a final value.

//problem 4
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // O(n)
    sum += array[i];
  }
  return sum;
}
//It takes linear time to complete the computation because the for loop takes linear time while the addition takes constant time.
//It will take constant space because the final value returns one numeric value.

//problem 5
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array) {
  return (array.length * (array.length + 1)) / 2;
}
//The time complexity is constant because the mathmatic operations takes constant time.
//the space complexity is constant because the final value returns a numeric value.

//problem 6
function searchSortedArray( //n/(2^0)   n/(2^1)   n/(2^2)   n/(2^3)   ........  n/(2^x) = 1
  number,
  array,
  beginIndex = 0,
  endIndex = array.length - 1
) {
  let middleIndex = Math.floor((beginIndex + endIndex) / 2); // O(1)
  if (array[middleIndex] === number) { //O(1)
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1;
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex); 
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  }
}
//The time complexity is logrithmic time O(log n) because in the worst case, the element we are searching for could be the first and last one or the element is not in the array.
//[1,2,3,4,5,6,7,8]
//The space complexity is O(log n) because each call to the recursiveBinarySearch function uses constant space, but we call recursiveBinarySearch (log n) times.

//problem 7
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
function compareArrays(array1, array2) {
  let arrayOfPairs = [];
  array1.forEach(function (e, i) { // O(m) array1 has an m size
    array2.forEach(function (e2, i2) { // O(n) array2 has an n size
      if (e === e2) {
        arrayOfPairs.push([i, i2]); // O(1)
      }
    });
  });
  return arrayOfPairs;

  const array3 = [3, 3, 3, 3, 3, 3, 3];
const array4 = [3, 3, 3, 3, 3];
}
//The time complexity is O(m*n) because there's a nested loop. <-- my bf says it.
//The space complexity is O(mn) because in the worst case, every element of array1 equals every element of array2. all those pairs get pushed to the arrayOfPairs. 

//problem 8
function sortByValue(array) {
  function swap(array, index1, index2) {
    let temporaryValue = array[index1]; // O(1)
    array[index1] = array[index2]; // O(1)
    array[index2] = temporaryValue; // O(1)
  }
  let count = 1; 
  while (count < array.length) {
    // O(n-1)
    let swapCount = 0;
    for (let i = 0; i < array.length - count; i++) {
        //first time we we do the for loop n-1; n-2; n-3 n-4, 1
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1); // O(1)
        swapCount++; // O(1)
      }
    }
    count++;
  }
  return array;
}
// The time complexity is quadratic time, O(n^2). The swap function takes constant time while the for loop is nested in while loop takes quadratic time.
//The space complexity is constant because we swap using the original array. The size of array stays the same. 

//problem 9
function returnDupes(array, array2) {
  let dupeArray = [];
  array.forEach(function (element) { //O(m)
    if (array2.includes(element)) { //O(1)*O(n)
      dupeArray.push(element); //O(1)
    }
  });
  return dupeArray;
}

const array = [3]
const array2 = [1, 2, 4]
//The time complexity is O(mn) because the includes method is a search function, taking O(n) and the forEach method takes O(m).
// The space complexity is O(m) bacause in the worst case all the elements in array are in array2. we don't check array2's elements in the array.

//problem 10
function sumFilteredData(array) {
  return array.filter(function (element) {
      return element > 5 && element < 20;
    }).reduce(function (valueToAdd, currentValue) {
      return valueToAdd + currentValue;
    }, 0);
}
// The time complexity is O(n) because it uses the chaining of methods.
// The space complexity is linear because it returns a new array.
