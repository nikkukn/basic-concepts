// Q - find the fibonacci series? --> O(n)

const findFibonacciSeries = (n) => {
    let fibArr = [0,1]
    let i=2;

    if(n<=2) return 1;

    while(i<=n){
        fibArr.push(fibArr[i-1]+ fibArr[i-2]);
        i++;
    }

    return fibArr[n];
}




// recursive approach - O(2^n)

const findFibonacciSeriesRecurrsiveSolution = (n)=> {
    if(n<=1) return n;
    else 
    return findFibonacciSeriesRecurrsiveSolution(n-1) + findFibonacciSeriesRecurrsiveSolution(n-2);
}