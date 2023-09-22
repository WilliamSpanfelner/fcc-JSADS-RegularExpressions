// Match Beginning String Patterns
// A caret (^) outside a character set will match leading substrings

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let result = firstRegex.test(firstString);
console.log(result);  // true

let notfirst = "You can't find Ricky now.";
result = firstRegex.test(notfirst);
console.log(result);  // false