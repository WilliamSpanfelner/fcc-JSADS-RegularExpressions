// Match Characters that Occur Zero or More Times
// The asterix (*) character suffix matches 0 or more times

let soccerWord = "gooooooooooal!";
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;
let result = soccerWord.match(goRegex);
console.log(result);  // [ 'goooooooooo' ]
result = gPhrase.match(goRegex);
console.log(result);  // [ 'g' ]
result = oPhrase.match(goRegex);
console.log(result);  // null


