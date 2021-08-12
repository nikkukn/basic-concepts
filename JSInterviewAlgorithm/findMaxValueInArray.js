// Q - How could you use Math.max to find the max value in an array?


function getMaxValueFromArray(arr) {
    return Math.max.apply(null, arr);
}