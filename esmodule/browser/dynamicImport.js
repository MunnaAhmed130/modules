console.log("code is live..");

// this code only works with dynamic import
if (true) {
    const combine = await import("./modules/combine.js");
    console.log(combine);
    console.log(combine.sayMyAge(3));
}

// console.log(await import("./modules/combine.js"));

// const combine = import("./modules/combine.js").then((result) =>
//     console.log(result)
// );
const combine = await import("./modules/combine.js");
console.log(combine.calc.default(5, 5));

const value = 31;
// like this too - import multiple module with promise api

const promises = Promise.all([
    await import("./modules/calc.js"),
    await import("./modules/whoami.js"),
]);

// console.log(promises);

// promises.then((result) => {
//     console.log(result);
//     console.log(result[0].sum(4, 5));
// });
