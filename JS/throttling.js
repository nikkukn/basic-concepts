/*
Implement throttling function

Difference between throttling and debounce is that throttling executes the function at regular intervals while
debouncing executes the function only after some cooling period.
*/

const throttle = function (fn, interval) {
    let timer;
    let allowEvents = true;

    if (allowEvents) {
        let context = this;
        let args = arguments;

        fn.apply(context, args);
        allowEvents = false;

        timer = setTimeout(() => {
            allowEvents = true;     // execute the function only after cooling period
        }, interval)
    }
}