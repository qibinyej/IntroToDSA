/* Problem #1:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

//multiple pointers
const countUniqueValues = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      count++;
      continue;
    }
    let previousValue = arr[i - 1];
    let currentValue = arr[i];
    if (previousValue == currentValue) {
        
    } else {
      count++;
    }
  }
  return count;
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
