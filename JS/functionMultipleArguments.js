/*
sum(1)(2)(3)(4)...()
*/

//basic implementation

let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b)
        }
        return a;
    }
}

// using ternary method
let sum = function (a) {
    return function (b) {
        return b ? sum(a + b) : a;
    }
}

//using one line implementation.
let sum = a => b => b ? sum(a + b) : a;


console.log(sum(10)(20)(3)(4)())