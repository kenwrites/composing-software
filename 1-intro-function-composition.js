'use strict';

var _ = require('lodash');

const g = n => n + 1;
const f = n => n * 2;

// ***********************************************************************
//  Without intentional function composition
// ***********************************************************************


// const doStuff = x => {
//     const afterG = g(x);
//     const afterF = f(afterG);
//     return afterF;
// };

// console.log(doStuff(20));

// ***********************************************************************
//  With intentional function composition
// ***********************************************************************

// const doStuffBetter = x => f(g(x));

// console.log(doStuffBetter(20));

// ***********************************************************************
//  Intentional function composition with logging
// ***********************************************************************

const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
};

// const doStuff = x => {
//     const afterG = g(x);
//     trace('after G')(afterG);
//     const afterF = f(afterG);
//     trace('afterF')(afterF);
//     return afterF;
// };

// console.log(doStuff(20));

// ***********************************************************************
//  Intentional function composition with logging via Lodash
// ***********************************************************************

// const pipe = require('lodash/fp/flow')

// const doStuffBetter = pipe(
//     g,
//     trace('after g'),
//     f,
//     trace('after f')
// );

// doStuffBetter(20);

// ***********************************************************************
//  Writing your own Lodash-style pipe
// ***********************************************************************

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const doStuffBetter = pipe(
    g,
    trace('after g'),
    f,
    trace('after f')
);

doStuffBetter(20);