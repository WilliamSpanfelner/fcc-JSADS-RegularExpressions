// Match All letters and Numbers
/* The \w character class is shorthand for 
matching all numbers and upper & lowercase 
letters of the alphabet.  The /w character 
class also include the underscore character
i.e. [A-Za-z0-9_] */

let longHand = /[A-Za-z0-9_]+/;
let shorthand = /\w+/;
let numbers = '42';
let varNames = 'important_var';
let result = longHand.test(numbers); 
console.log(result);  // true
result = shorthand.test(numbers); 
console.log(result);  // true
result = longHand.test(varNames); 
console.log(result);  // true
result = shorthand.test(varNames); 
console.log(result);  // true

// \w is also known as a shorthand character class

/* Use the shorthand character class \w to countt the number
of alphanumeric characters in various quotes and strings.*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/;  // Change this line
result = quoteSample.match(alphabetRegexV2).length;