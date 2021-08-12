// Q - How could you implement cache to save calculation time for a recursive fibonacci function?

let memo = {}
function memoization(n) {
    if(n<=1) return 1;

    if(memo[n]){
        return memo[n];
    }else {
        memo[n] = memoization(n-1)+memoization(n-2);
    }

    return memo[n];
}