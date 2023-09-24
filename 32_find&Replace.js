// Use Capture Groups to Search and Replace
/* The .replace() string method takes a regex to match
and a string to replace once a match is made */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
let result = wrongText.replace(silverRegex, "blue");

console.log(wrongText, result);  // The sky is silver. The sky is blue.

/* Capture groups can also be used in the first argument
for the replace method. */

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));  // Camp Code