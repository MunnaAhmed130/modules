console.log("code is live..");

// this code only works with dynamic import
if (true) {
    const combine = await import("./esmodule/node/modules/combine.js");
    console.log(combine);
    console.log(combine.sayMyAge(3));
}

// console.log(await import("./modules/combine.js"));

const combine = import("./esmodule/node/modules/combine.js").then((result) =>
    console.log(result)
);

// console.log(combine);

// like this too - import multiple module with promise api

const promises = Promise.all([
    await import("./esmodule/node/modules/calc.js"),
    await import("./esmodule/node/modules/whoami.js"),
]);

// console.log(promises);

// promises.then((result) => {
//     console.log(result);
//     console.log(result[0].sum(4, 5));
// });
