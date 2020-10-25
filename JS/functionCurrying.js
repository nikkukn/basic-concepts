/*
Define function currying in Javacsript.
Currying is just a way tranforming functions such that it can be called with mutiple arguments and do not affect the order of function call.
*/

// Currying with bind function


function multiply(x, y) {
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)


let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5)


// currying with closures
let multiply = function (x) {
    return function (y) {
        console.log(x * y)
    }
}


let multiplyByTwo = multiply(2);
multiplyByTwo(4)