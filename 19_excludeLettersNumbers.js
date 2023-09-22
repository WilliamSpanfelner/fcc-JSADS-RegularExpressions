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