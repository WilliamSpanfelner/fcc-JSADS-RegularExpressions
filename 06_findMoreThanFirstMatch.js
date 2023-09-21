// Find More Than the First Match
/* the global flag g, will return an array of results
corresponding to the number of times a word appears in 
the string of interest */

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
let result = testStr.match(ourRegex);

console.log(result);  // [ 'Repeat', 'Repeat', 'Repeat' ]