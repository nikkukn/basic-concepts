/*
What does following code evaluates to?
*/
// Q1
var x = 1;
var y = x;

x = 0;
console.log(x, y) // it returns 0, 1

//Q2
var x = [1];
var y = x;

x = [];
console.log(x, y); // returns [], [1]

//Q3
function Abc() { console.log(this); };
Abc()
new Abc();  // returns window object.

//Q4
var x = 1;
var obj = {
    x: 2,
    getX: function () {
        return console.log(this.x)
    }
}

obj.getX()
let a = obj.getX()
console.log(a) // will return 2 and undefined for the both the console logs

//Q5
//How to get the a to log 2 in the above code


//Q6
console.log("A");
setTimeout(() => console.log("B"), 0);
setTimeout(() => console.log("C"), 0);
console.log("D");

// result - A,B, C and D.


//Q7

setTimeout(function () {
    console.log("A");
}, 0);
Promise.resolve().then(function () {
    console.log("B");
}).then(function () {
    console.log("C");
});

console.log("D");

// result D,B,C,A

//Q8

let obj1 = {
    a: 1,
    b: 2
}

function mutate(obj) {
    obj = { a: 4, c: 6 }
}

console.log(obj1)
mutate(obj1)
console.log(obj1)

// result --> {a:1, b:2} and {a:1, b:2}

