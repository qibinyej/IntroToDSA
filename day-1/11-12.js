/**
 * Problem 11: Given the following object methods, label what the TIME complexity is for each one:
 */

const arr2 = [1, 2, 3, 4, 5, 6, 7];
//inserting 1; adding elements to the end of an array
arr2.push(8) //constant time 

//inserting 2; adding elemnts to the beginning
arr2.unshift(0) //linear time

//removing 1; delete last element
arr2.pop() // constant time

//removing 2; delete first element 
arr2.shift() // linear time

//searching 1; 
const findNumber = arr2.find(num => num === 2) // linear time

//searching 2; 
for (let i = 0; i < arr2.length; i++) { //linear time
if (arr2[i] === 2) {
return arr2[i]
}
}

//retrieving
const getNumber = arr2[3] //constant time

//method 1
const double = arr2.map(num => num * 2) //linear time

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) //linear time

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) // linear time

//method 4 s
for (const num of nums) { // linear time
console.log(num * 2)
}

//method 5; join() returns a string; 
const convertToString = arr2.join(' ') // constant time