console.log("code is running...");

// import { sub as subtract, sum } from "./calc.js";

import * as calc from "../modules/calc.js"; // using namespace

// import sayMyName from "./whoami.js";
import { sayMyAge, default as sayMyName } from "../modules/whoami.js";

console.log(sayMyName("Adam"));
console.log(sayMyAge(4));

console.log(calc.sub(3, 5));
console.log(calc.sum(3, 5));

// console.log(subtract(3, 5));
// console.log(sum(3, 5));
