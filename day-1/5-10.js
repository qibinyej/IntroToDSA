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