// Check for Mixed Grouping of Characters
/* Surround groups of characters to be matched with 
parentheses.  E.g. if you want to find Penguin or Pumpkin
the regex /P(engu|umpk)in/g could be used. */

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
let result = testRegex.test(testStr);
console.log(result);  // true
