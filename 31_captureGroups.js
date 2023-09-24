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

let repeatNums = ["42\t42\t42", "42 42 42 42", "42 42 42", "100 100 100"]

let repeatNum = repeatNums[0];
let reRegex = /^(\d+)( )\1\2\1$/g;  // Change this line
result = reRegex.test(repeatNum);
console.log(result);

result = repeatNum.match(reRegex);
console.log(result);