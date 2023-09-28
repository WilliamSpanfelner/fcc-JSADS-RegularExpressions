// Match Everthing but Letters and Numbers
/* The \W character class matches everything excluding 
alphanumerics and numbers and is equivalent to:
[^A-Za-z0-9_]
*/

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
let result = numbers.match(shortHand);
console.log(result);  // [ '%' ]
result = sentence.match(shortHand);
console.log(result);  // [ '!' ]

/* Use the shorthand character class \W to count the number
of non-alphanumeric characters in various quotes and 
strings. */

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;  // Change this line
result = quoteSample.match(nonAlphabetRegex)  //.length;

console.log(nonAlphabetRegex, result, result.length);  
// /\W/g [' ', ' ', ' ', ' ', ' ', '.'] 6