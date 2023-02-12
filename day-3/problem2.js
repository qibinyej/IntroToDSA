// Given a sorted array of integers, find the first occurrence of a target value.
// If the target is not found in the array, return -1.
function binarySearchFirstOccurrence(nums, target) {
    if(nums.length <=0){
        return null
    }
    let left = 0; 
    let right = nums.length-1;
    while(left<right){
        let middleIndex = Math.floor((left+right)/2)
        let middleValue = nums[middleIndex]
        if(middleValue === target){
            for(let i = middleIndex-1; i>=0; i--){
                if(nums[i] == target){
                    middleIndex--
                }
            }
            return middleIndex
        }else if(middleValue < target){
            left = middleIndex +1
        }else{
            right = middleIndex -1
        }
    }
    return -1
}
// let nums1 = [2, 2, 2, 2, 2];
// Test case
// let nums1 = [1, 2, 3, 4, 5];
// let target1 = 3;
// let expected1 = 2;
// let result1 = binarySearchFirstOccurrence(nums1, target1);
// console.assert(result1 === expected1, `Test case 1 failed: expected ${expected1} but got ${result1}`);

// let nums2 = [1, 2, 3, 4, 5];
// let target2 = 6;
// let expected2 = -1;
// let result2 = binarySearchFirstOccurrence(nums2, target2);
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got ${result2}`);

// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
// let target3 = 2;
// let expected3 = 3;
// let result3 = binarySearchFirstOccurrence(nums3, target3);
// console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got ${result3}`);

// let nums4 = [2, 2, 2, 2, 2];
// let target4 = 2;
// let expected4 = 0;
// let result4 = binarySearchFirstOccurrence(nums4, target4);
// console.log(result4)
// console.assert(result4 === expected4, `Test case 4 failed: expected ${expected4} but got ${result4}`);