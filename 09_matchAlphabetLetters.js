// Match Letters of the Alphabet
/* Match a range of characters using the - inside
square brackets */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
let result = catStr.match(bgRegex);  // ['cat']
console.log(result);
result = batStr.match(bgRegex);  // ['bat']
console.log(result);
result = matStr.match(bgRegex);  // null
console.log(result);

// Match all the letters in the string quoteSample.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/;  // change this line
result = alphabetRegex;  // change this line