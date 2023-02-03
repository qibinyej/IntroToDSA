/**
 * Problem 5: Given the following piece of code:
- Explain what the TOTAL time complexity is
o For example, if a function had one linear and a nested for…loop, it would be: n + n^2
- Explain what the CONSOLIDATED time complexity is
o For example, if a function had one linear and a nested for…loop, it would condense to: n^2
 */

const someFunction = (arr1) => {
  arr1.push(1).pop(); //O(1)
  for (let i = 0; i < arr1.length; i++) { //O(n)
    console.log("do something 2");
  }
  for (let i = 0; i < arr1.length; i++) { //O(n)
    console.log("do something 3");
  }
  for (let i = 0; i < arr1.length; i++) { //O(n)
    for (let i = 0; i < arr1.length; i++) { //O(n)
      console.log("do something 3");
    }
  }
};

//total time complexity is O(1) + O(n) + O(n) +O(n^2) 
//Consolidated time complexity is O(n^2)