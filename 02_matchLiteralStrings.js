// Match Literal Strings
const testStr = "Hello, my name is Kevin.";
const testRegex = /Kevin/;
const result = testRegex.test(testStr);

console.log(result);  // true