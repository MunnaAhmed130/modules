const { sub, sum } = require("./modules/calc");
const { sayMyAge, sayMyName } = require("./whoami");

console.log(sayMyName("Adam"));
console.log(sayMyAge(4));

console.log(sub(3, 5));
console.log(sum(3, 5));
