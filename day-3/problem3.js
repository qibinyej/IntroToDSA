// Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
    //turn the string into a letter array
    let letterArray =[];
    for(let i = 0; i< s.length; i++){
        
        letterArray.push(s[i])
        //console.log(letterArray)

    }
}
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
//[a, b, c, a, b,c, b, b] 
//freqCounter = {
    "a": 1+1
    "b": 1+1+1+1
    "c": 1+1

}
// console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3