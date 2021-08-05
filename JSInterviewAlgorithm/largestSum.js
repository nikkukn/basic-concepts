// Q - How would you find the largest sum of any two elements?

function largestSum(arr) {
    let firstMax = arr[0], secondMax=arr[1];

    if(firstMax>secondMax){
        firstMax = arr[1];
        secondMax = arr[0];
    }

    if(arr.length<2) return null;

    for(let i=2;i<arr.length;i++){
        if(arr[i]>firstMax){
            firstMax = arr[i];
        }

        if(arr[i]>secondMax){
            secondMax = arr[i]
        }
    }

    return firstMax+secondMax;
}