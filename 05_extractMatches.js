// Extract Matches
// The .match() method takes a regex and returns an array of matching words.
console.log("Hello, World!".match(/Hello/));  // ["Hello"]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let result = ourStr.match(ourRegex);

console.log(result);  // ["expressions"]

// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;  // Change this line
result = extractStr.match(codingRegex);  // Change this line

console.log(result);  // ['coding']