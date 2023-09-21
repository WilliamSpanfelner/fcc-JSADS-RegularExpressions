// Ignore Case While Matching
/* The i flag suffixing a regex expression
will ignore case differeneces */

//  /ignorecase/i

/* Write a regex fccRegex to match freeCodeCamp, no 
matter its case.  Your regex should not match any 
abbreviations or variations with spaces.*/

let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;  // change this line
let result = fccRegex.test(myString);

console.log(result);  // true