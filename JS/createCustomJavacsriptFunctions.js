/*
Create your custom JavaScript functions”:Call(),Apply(),Bind()
,map(),filter(),reduce() in javascript
*/


/*
array.map function creates new array with the results of calling a provided function
in the calling array.
 * Map function is attached to the array prototype
 * It takes in a callback and passes every item in the array
 * through the callback, the result is pushed into a new array
 * which is returned
*/

Array.prototype.newMap = function (callback) {
    const result = [];
    for (let index = 0; index < this.length; i++) {
        if (this.indexOf(this[index] > -1)) {
            result[index] = callback(this[index], index, this)
        }
    }
    return result;
}

/*
* A function which takes a function as an argument and an optional parameter for execution context
* The function argument must be passed the array index, the item and the context
* The result of the callback invokation is tested, if true the array element is pushed to a new array item
--------
 * Filter function is attached to the array prototype
 * It takes in 3 parameters, callback and a context (this)
 * argument, the callback is invoked with the current item
 * the index, the array,
--------
*/

Array.prototype.newFilter = function (callback, context) {
    const result = []
    for (let index = 0; index < this.length; i++) {
        if (callback.call(context, this[index], this))
            result.push(this[index])
    }
    return result;
}


/*
->A function which takes a function as an argument and a starting value
->The reducer function, takes four parameters, an accumulator, a current value, index, the source array
-> The starting value if passed, must be used as the initial accumulator,
 if no accumulator is passed then the first element of the array becomes the first element itself
-> The execution context of the callback becomes that of the accumulator.

 * The callback gets 4 arguments
 * an accumulator, current value, index, current array
 * 
*/

Array.prototype.newReduce = function (callback, startingValue) {
    let accumulator = startingValue || undefined;

    for (let index = 0; index < this.length; i++) {
        if (accumulator) {
            accumulator = callback.apply(accumulator, accumulator, this[index], this)
        } else {
            accumulator = this[index]
        }
    }
    return accumulator;
}

/*

The forEach() method executes a provided function once for each array element.

A function which takes a function as an argument
The function argument must be passed the array index, the item and the context
A check should me made to see if the item exists in the array

 * The callback gets 3 arguments
 * the item, the index and the  execution context
 * A for each array loop cannot be broken using break;
*/


Array.prototype.newForEach = function (callback, context) {
    let result = [];

    for (let index = 0; index < this.length; index++) {
        if (this.indexOf(this[index]) > -1) {
            callback.apply(context, this[index], index, this)
        }
    }
}


/*
The bind() method creates a new function that, when called, has its this keyword set to the provided
value, with a given sequence of arguments preceding any provided when the new function is called.


* The bind method is attached on the Function prototype, and is used to pass an execution
  context to the function
* The bind method takes 2 arguments, one being the context, and an optional parameter of 
  an array of arguments
* Both these cases should work
* Hence the bind method should return a new function in which the arguments must 
  be concatenated and
  applied using Function.apply
* Partially applied arguments, should also work, eg. if a method takes 2 arguments,
   the following
   should be valid
*/

Function.prototype.newBind = function (context) {
    const currentContext = this;
    const currentArguments = Array.prototype.slice.call(arguments, 1) //Dont need context

    return function () {
        const args = Array.prototype.slice.call(arguments);
        currentContext.apply(context, currentArguments.concat(args));
    }
}