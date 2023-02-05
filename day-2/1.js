/* Problem #1:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

//multiple pointers
const countUniqueValues = (arr) => {
    let count = 0;
    let previousValue;
    let currentValue
    
    for(let i = 0; i< arr.length-1; i++){
        if(!arr[i]){
            return 0
        }

        let previousValue = arr[0];
        let currentValue = arr[i];
        previousValue = currentValue;
       if(previousValue !== currentValue ){
        count++
       }
    }
    count++
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
