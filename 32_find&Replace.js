// Use Capture Groups to Search and Replace
/* The .replace() string method takes a regex to match
and a string to replace once a match is made */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
let result = wrongText.replace(silverRegex, "blue");

console.log(wrongText, result);  // The sky is silver. The sky is blue.

/* Capture groups can also be used in the first argument
for the replace method. */

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));  
// Camp Code

/* Write a regex fixRegex using three capture groups that
will search for each word in the string one two three.
Then update the replaceText variable to replace one
two three with the string three two one and assign the 
result to the result variable.  Make sure you are utilizing
capture groups in the replacement stirng using the dollar
sign ($) syntax. */

let str = "one two three";
let fixRegex = /(one) (two) (three)/;  // Change this line
let replaceText = "$3 $2 $1";  // Change this line

result = str.match(fixRegex);
console.log(result);

result = str.replace(fixRegex, replaceText);
console.log(result);