// Specify Only the Lower Number of Matches
/* To match from a lower limit to an unbounded 
upper limit, simply specify the lower limit with
a comma and close the curly bracket */

let a4 = "haaaah";
let a2 = "haah";
let a100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
let result = multipleA.test(a4);
console.log(result);  // true
result = multipleA.test(a2);
console.log(result);  // false
result = multipleA.test(a100);
console.log(result);  // true