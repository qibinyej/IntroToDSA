/**
 * Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of
why it is.
 */

//Problem 1
function findFirstIndexOfNumber(number, array) {
    for (let i = 0; i < array.length; i++) { // O(n)
    if (array[i] === number) { // O(1)
    return i; 
    }
    }
    return -1 
}
//time complexity is linear time because a for...loop is linear and conditional operation is constant, the conslidated time is linear, O(n).
//space complexity is constant because the final value returns one index value or -1. 


//problem 2
    function findEachIndexOfNumber(number,array) { let
        arrayOfIndexes = [];
        array.forEach(function(element, index) { // O(n)
        if (element === number) {
        arrayOfIndexes.push(index); // O(1)
        }
        });
        return arrayOfIndexes;
        }
//The time complexity is linear because forEach method which loops through each element of the array takes linear time to finish the operation while the push method takes constant time to add an element to the end of array. The conslidated time of complexity is linear, O(n).
//The space complexity is linear because the final value returns in an array.


//problem 3
const array = [36, 14, 1, 7, 21];
function higherOrLower(array){
    if (array[array.length -1 ] > array[0]) { 
        return "Higher";
    }else if (array[array.length -1 ] < array[0]) {
        return "Lower";
    }else{
        return "Neither";
    }
}
//The time complexity is constant because the conditional operation takes constant time. 
//The space complexity is constnat because it returns a fixed size string as a final value. 


//problem 4
const array = [1,2,3,4,5,6,7,8];
function determineSumOfSequentialArray(array) { 
    let sum = 0;
    for (let i = 0; i < array.length; i++) { 
        sum += array[i];
    }
    return sum;
}
//It takes linear time to complete the computation because the for loop takes linear while the addition takes constant time. 
//It will take constant space because the final value returns one numeric value. 


//problem 5
const array = [1,2,3,4,5,6,7,8];
function determineSumOfSequentialArray(array) {
return array.length * (array.length + 1)/2;
}
//The time complexity is constant because the mathmatic operations takes constant time. 
//the space complexity is constant because the final value returns a numeric value. 


//problem 6
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {
    let middleIndex = Math.floor((beginIndex + endIndex)/2);
    if (array[middleIndex] === number) {
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
//The time compelxity is constant because it's assignment and conditional statement.
//The space complexity is linear becuase it's a recursive operation. 


//problem 7
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76]; 
function compareArrays(array1, array2) {
    let arrayOfPairs = [];
    array1.forEach(function(e, i) {
        array2.forEach(function(e2, i2) {
            if (e === e2) {
            arrayOfPairs.push([i, i2]);
            }
        });
    });
    return arrayOfPairs;
}
//

//problem 8
function sortByValue(array){
    function swap(array, index1, index2){ let
    temporaryValue = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryValue;
    }
    let count = 1;
    while (count < array.length) { let
    swapCount = 0;
    for (let i=0; i<array.length-count; i++) {
    if (array[i] > array[i+1]) {
    swap(array, i, i+1);
    swapCount++;
    }
    }
    count++;
    }
    return array;
    }

//problem 9
function returnDupes(array, array2) { let
    dupeArray = [];
    array.forEach(function(element) {
    if (array2.includes(element)) {
    dupeArray.push(element);
    }
    });
    return dupeArray;
    }

//problem 10
function sumFilteredData(array) {
    return array.filter(function(element) {
    return ((element > 5) && (element < 20))
    }).reduce(function(valueToAdd, currentValue) {
    return valueToAdd + currentValue;
    }, 0);
    }