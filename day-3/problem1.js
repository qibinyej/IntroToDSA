/**
 *  Please identify and solve the following patterns that appropriately matches a divide and conquer or
sliding window pattern using time complexity of O(n) or O(log(n)).  
 * */

/*
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is
not.
*/
const maxSubarraySum = (arr, n) => {
    //edge cases: length is less than n && arr is empty
    if(arr.length < n){
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    //set up initial window using for loop
    for(let i = 0; i< n; i++){
        maxSum += arr[i] //0 +100 + 200 =300
    }
    tempSum = maxSum;
    //sliding window
    for(let i=n; i<arr.length; i++){
        tempSum = tempSum - arr[i-n] + arr[i] // 300 - 100 + 300; 500 - arr[3-2]//200 + arr[3]400 =700
        maxSum = Math.max(maxSum, tempSum)
    }
    return -1;
}
// Test Cases:
// maxSubarraySum([100,200,300,400], 2) 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) 5
// maxSubarraySum([2,3], 3) null