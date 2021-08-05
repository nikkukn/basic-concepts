// Q- from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

function findMissingNumber(arr) {
    let n = arr.length+1
    let expectedSum = n*(n+1)/2, sum=0;
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }

    return expectedSum-sum;
}