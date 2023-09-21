// Extract Matches
// The .match() method takes a regex and returns an array of matching words.
console.log("Hello, World!".match(/Hello/));  // ["Hello"]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let result = ourStr.match(ourRegex);

console.log(result);  // ["expressions"]