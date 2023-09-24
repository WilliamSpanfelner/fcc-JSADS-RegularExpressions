// Reuse Patterns Using Capture Groups
/* Capture groups are regex patterns enclosed with 
parentheses.  Once a group is define in a regex, it 
can be reference almost as if it was an element of 
an array - \1 for the first group defined, and so on. */

let repeatedStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
let result = repeatRegex.test(repeatedStr);
console.log(result);

result = repeatedStr.match(repeatRegex);
console.log(result);

/* Use capture groups in reRegex to match a string that
consists of only the same number repeated exactly three
times separately by single spaces. */

let repeatNum = "42 42 42";
let reRegex = /change/;  // Change this line
result = reRegex.test(repeatNum);
