// Fibonacci exponential time function


function fibonacci(n) {
    if(n<=1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// Time complexity - O(2^n)