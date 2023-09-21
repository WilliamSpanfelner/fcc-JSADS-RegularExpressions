// Match Letters of the Alphabet
/* Match a range of characters using the - inside
square brackets */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
let result = catStr.match(bgRegex);  // ['cat']
console.log(result);
result = batStr.match(bgRegex);  // ['bat']
console.log(result);
result = matStr.match(bgRegex);  // null
console.log(result);

