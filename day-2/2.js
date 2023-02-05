/*
Write a function called, areThereDuplicates which accepts a array of letters,
and checks whether there are any duplicates among the argument passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

//multiple pointers

const areThereDuplicates = (arrOfLetters) => {
  let sortedArr = arrOfLetters.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    if (i == 0) {
      continue;
    }
    let prevLetter = sortedArr[i - 1];
    let currentLetter = sortedArr[i];
    if (prevLetter == currentLetter) {
      return true;
    }
  }
  return false;
};

//Tests
// areThereDuplicates(['a', 'a', 'c', 'd']) true
// areThereDuplicates(['a', 'b', 'c']) // false
