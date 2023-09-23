// Match Non-Whitespace Characters
/* Match everything except for whitespace characters
with \S which is equivalent to [^ \r\t\f\n\v] as it 
doesn't match whitespace, carriage return, tab, form feed,
and new line characters. */

let whitespace = "Whitespace. Whitespace everywhere.";
let nonSpaceRegex = /\S/g;
let result = whitespace.match(nonSpaceRegex).length;

console.log(result);  // 32

/* Change the regex countNonWhiteSpace to look for
multiple non-whitespace characters in a String. */

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; //Change this line
result = sample.match(countNonWhiteSpace);
