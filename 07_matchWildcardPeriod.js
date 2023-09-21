// Match Anything with Wildcard Period
// The wildcard character . will match any one character.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let result = huRegex.test(humStr);
console.log(result);  // true

result = huRegex.test(hugStr);
console.log(result);  // true

/* Complet the regex unRegex so that it matches the strings 
run, sun, fun pun, nun and bun.  Your regex should 
use the wildcard character. */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
result = unRegex.test(exampleStr);

console.log(result);  // true