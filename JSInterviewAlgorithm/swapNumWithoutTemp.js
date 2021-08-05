// Q- How would you swap two numbers without using a temporary variable?

const swapTwoNums = (a,b) => {
    b = b - a;
    a = a + b;
    b = a - b;
    return {a,b}
}