// Match Whitespace
/* The \s character class matches whitespace in a string
that can be composed of whitespace, carriage return, tab, 
form feed, and new line characters (i.e. [ \r\t\f\n\v] 
respectively). */

let whitespace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
let result = whitespace.match(spaceRegex);

console.log(result);  // [ ' ', ' ' ]

/* Change the regex countWhiteSpace to look for multiple
whitespace characters in a string. */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;  // Change this line
result = sample.match(countWhiteSpace);

console.log(result);  // [ ' ', ' ', ' ', ' ', ' ' ]