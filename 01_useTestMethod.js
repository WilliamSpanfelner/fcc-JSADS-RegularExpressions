// Use the Test Method
// To find the word Camp in freeCodeCamp:
const testStr = 'freeCodeCamp';

// then specify a regular expression like so:
let testRegex = /Code/;

// One way to test for a regex is to use the test method.
console.log(testRegex.test(testStr));  // true

/* Apply the regex myRegex on the string myString using
the .test() method.*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);  // true

console.log(result);