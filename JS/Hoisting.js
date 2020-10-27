/*
Function decelarations in javascipt are called hoisting.
-------- IMPORTANT --------
1. Functions are stored with reference to entire function.
2. Variables declared with the let and const keyword are stored unitialized(including ES6 clasess)
3. Variables declared with  the var keyword are stored with default value undefined.
4. 
*/
console.log(sum(2, 3)) // we can invoke function before we decalared them, since it is a reference to entire function in the memory.
console.log(city) // prints undefined
console.log(name) // Reference Error. Trying to refernece unintialized variables before the declaration.
// When the line reaches the variable declaration part the values in the memory will be 
//overwritten with the values actually declared with them.
function sum(x, y) {
    return x + y;
}

const name = "Jasmin Virdi"


let info = {
    age: 25,
    nationality: "Indian"
}


var city = "Mumbai, Maharashtra"
