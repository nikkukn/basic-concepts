/*
Implement debounce function in javacsript

Debounce function() -> forces a function to wait for certain amount of time before running again.
Events such as scrolling, mouseover and keypress bring great overhead with time if they are captured every single time.
The implementation of debounce returns a function that will be called after it stops being called for N milliseconds.
*/


const debounce = function (fn, interval, immediate) {

    if (immediate && !interval) {
        return fn.apply()
    } else {
        let timer;
        return function (e) {
            clearTimeout(interval);
            timer = setTimeout(() => {
                fn.apply();
                console.log("will be printed after few milliseconds");
            }, interval);
        }
    }
}

debounce(apiCall, 2000);