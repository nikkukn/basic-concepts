/*
Generation function is not based on run-to-completion model
*/


function* getFunc() {
    yield ':P'
    console.log("First log!")
    yield ':*'
    console.log("Second Log!")
    return 'Done'
}

const genObj = genFunc()

//call generator function by 
genObj.next() // {value: ":p", done: false}
genObj.next() // {value: ":*", done: false}
genObj.next() // {value: "Done", done: true}

// making an iterator.
object[Symbol.iterator] = function* () {
    yield* Object.keys(this)
}

function* generatorFunction() {
    const second = yield 'Field';
    console.log(second);
    return 'All Done!'
}

// will print {value: "Field", done: false}

genObj1 = generatorFunction();

genObj1.next("I like Javacsript!")
// output
// I like Javascript!
//{value: "All done!", done: true}

function* getLargeNumber() {
    let number = 0;
    while (true) {
        yield getVeryLargeNumber(10, number);
    }
}

// Applications of generator functions
// 1. decoder stream
// 2. 