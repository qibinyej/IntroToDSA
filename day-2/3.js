/*
Write a function called avgPair.
Given a sorted array of integers and a target average, determine if there is a pair of values in the
array
where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/
const avgPair = (arr, avgTarget) => {
  let avgTwoIntegers;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      avgTwoIntegers = (arr[i] + arr[j]) / 2;
      console.log(avgTwoIntegers);
      if (avgTwoIntegers == avgTarget) {
        return true;
      }
    }
  }
  return false;
};

const avgPair1 = (arr, avgTarget) => {
  let left = i;
  let right = arr.length - 1;
  while (left < right) {
    let avgTwoIntegers = (arr[left] + arr[right]) / 2;
    if (avgTwoIntegers > avgTarget) {
      right--;
    } else if (avgTwoIntegers < avgTarget) {
      left++;
    } else {
      return true;
    }
  }
  return false;
};
// Test Cases:
// avgPair([1,2,3],2.5) true
// avgPair([1,3,3,5,6,7,10,12,19],8) true
// avgPair([-1,0,3,4,5,6], 4.1) false
// avgPair([],4) false
