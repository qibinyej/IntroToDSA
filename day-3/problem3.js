// Given a string, find the length of the longest substring without repeating characters.
//sliding window: set up initial window, 
function lengthOfLongestSubstring(s) {
    //turn the string into a letter array
    if(s == null || s.length == 0) return;

    let start = 0; //start of substring length;
    let charMap = {}; // create an object to store last index of each character in string;
    let maxLength = 0; // store the longest length of substring
    for(let i = 0; i< s.length; i++){
        if(charMap[s[i]] >=start){
            start = charMap[s[i]]+1
            //....
        }
    }
  

}
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
//[a, b, c, a, b,c, b, b]: initial window [a, b, c]; if 1st slide window === initial, pick 1st; ...

// console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3