// Check for Mixed Grouping of Characters
/* Surround groups of characters to be matched with 
parentheses.  E.g. if you want to find Penguin or Pumpkin
the regex /P(engu|umpk)in/g could be used. */

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
let result = testRegex.test(testStr);
console.log(result);  // true

/* Fix the regex so that it checks fro the names of Franklin
Roosevelt or Eleanor Roosevelt in a case sensitive manner
and it should make concessions for middle names.

Then fix the code so that the regex that you have created is 
checked against myString and either true or false is returned
depending on whether the regex mathces. */

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin|Franklin D.) Roosevelt/;  // Change this line
result = myRegex.test(myString);  // Change this line
console.log(result);