'use strict';

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

const doStuff = x => {
    const afterG = g(x);
    trace('after G')(afterG);
    const afterF = f(afterG);
    trace('afterF')(afterF);
    return afterF;
};

console.log(doStuff(20));

