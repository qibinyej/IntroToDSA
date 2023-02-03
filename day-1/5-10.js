/**
 * Problem 5: Given the following piece of code:
- Explain what the TOTAL time complexity is
o For example, if a function had one linear and a nested for…loop, it would be: n + n^2
- Explain what the CONSOLIDATED time complexity is
o For example, if a function had one linear and a nested for…loop, it would condense to: n^2
 */

const someFunction = (arr1) => {
  arr1.push(1).pop(); //O(1)
  for (let i = 0; i < arr1.length; i++) {
    //O(n)
    console.log("do something 2");
  }
  for (let i = 0; i < arr1.length; i++) {
    //O(n)
    console.log("do something 3");
  }
  for (let i = 0; i < arr1.length; i++) {
    //O(n)
    for (let i = 0; i < arr1.length; i++) {
      //O(n)
      console.log("do something 3");
    }
  }
};
//total time complexity is O(1) + O(n) + O(n) +O(n^2)
//Consolidated time complexity is O(n^2)


/**
 * Problem 6: Given the following piece of code:
- Explain what the TOTAL time complexity is
o For example, if a function had one linear and a nested for…loop, it would be: n + n^2
- Explain what the CONSOLIDATED time complexity is
o For example, if a function had one linear and a nested for…loop, it would condense to: n^2
 */

const someFunction1 = (arr1) => {
  let sum = arr1[1] + arr[2]; //O(1)
  while (condition) { //O(n)
    sum = arr[5] + arr[7];
  }
  for (let i = 0; i < arr1.length; i++) { //O(n)
    for (let i = 0; i < arr1.length; i++) { //O(n)
      for (let i = 0; i < arr1.length; i++) { //O(n)
        console.log("do something 3");
      }
    }
  }
};
//Total time complexity is O(1) + O(n) +O(n^3)
//Consolidated time complexity is O(n^3)

/**
 * Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.
 *      When it comes with scaling and data growth, constants is negligible and the actual data growth impact comes from the actual Big O. 
 * 
        When having multiple time complexities in a computation, the worse time complexity has a bigger impact on the code performance. 
 *  
 */

/**
 * Problem 8: In 2-3 sentences, please explain what space complexity is and why we care.
 *      Space complexity is the total amount of memory space used for algoirthm/program, including space for input values. When computing algorithm, we should consider how much additional memory it will needs.
 * 
 */

/**
 * Problem 9: Given the following data TYPES, label what the space complexity is for each one:
    - Boolean: constant space
    - Undefined: constant space
    - Null: constant space
    - Numbers: constant space
    - String: linear space
    - Array: linear space
    - Object: linear space
 */

/**
 * Problem 10: Give two reasons when you should use a array and when you should use a object.
    An array provides fast access to its elements and needs order in computation while a object doesn't.
 */

