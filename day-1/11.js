/*
Problem 11: Given the following array methods, label what the TIME complexity is for each one:
**/

const obj = {
  name: "tony",
};

//inserting
obj.age = 44; 
// constant time


//removing
delete obj.age; 
//constant time 


//searching 1
obj.hasOwnProperty["name"]; 
// linear time

//searching 2
for (const prop in obj) { 
  console.log(obj[prop]);
}
// linear time

//accessing
obj.age; //44
//linear time

//retrieving keys
Object.keys(obj); 
//linear time

//retrieving values
Object.values(obj); 
// linear time
