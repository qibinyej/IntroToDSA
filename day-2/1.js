/* Problem #1:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

//multipointers

const countUniqueValues = (arr) => {
    let count = 0;
    
    for(let i = 0; i< arr.length-1; i++){
        let left = i
        let right = arr.length-1
        if(!arr[i]){
            return 0
        }

       while(arr[left] !== arr[right]){
            left++
        }
   
    }
    count++
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
