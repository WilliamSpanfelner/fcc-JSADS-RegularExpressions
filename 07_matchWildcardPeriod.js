// Match Anything with Wildcard Period
// The wildcard character . will match any one character.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let result = huRegex.test(humStr);
console.log(result);  // true

result = huRegex.test(hugStr);
console.log(result);  // true