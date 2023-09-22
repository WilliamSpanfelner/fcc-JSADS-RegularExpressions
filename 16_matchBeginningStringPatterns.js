// Match Beginning String Patterns
// A caret (^) outside a character set will match leading substrings

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let result = firstRegex.test(firstString);
console.log(result);  // true

let notfirst = "You can't find Ricky now.";
result = firstRegex.test(notfirst);
console.log(result);  // false

/* Use the caret character in a regex to find Cal only in the 
beginning of the string rickyAndCal */
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;  // Change this line
result = calRegex.test(rickyAndCal);

console.log(result);