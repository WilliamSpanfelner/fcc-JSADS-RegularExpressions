// Find characters with Lazy Matching
/* A lazy match locates the smallest possible part of a string
satisfying the regex pattern.  The question mark (?) suffixing
the appropriate part of the regex will ensure a lazy match.*/

/* A regex pattern of /t[a-z]*i/ applied to the string "titanic"
will return ["titani"] as that will be the longest matching 
sub-string. */

let myString = "titanic";
let myRegex = /t[a-z]*i/;
let result = myString.match(myRegex);
console.log(result);  // [ 'titani' ]

// The same string matched lazily:
myRegex = /t[a-z]*?i/;
result = myString.match(myRegex);
console.log(result);  // [ 'ti' ]

/* Fix teh regex /<.*>/ to return the HTML tag <h1> and 
not the text "<h1>Winter is coming</h1>". Remember the
wildcard . in a regular expression matches any character */

let text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/;
result = text.match(myRegex);
console.log(result);  // [ 'ti' ]