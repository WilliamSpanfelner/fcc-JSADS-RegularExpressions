// Match Numbers and Letters of the Alphabet
// The hyphen can be used to match numbers also

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
let result = jennyStr.match(myRegex);
console.log(result);