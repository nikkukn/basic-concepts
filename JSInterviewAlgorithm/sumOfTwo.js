// Q- From a unsorted array, check whether there are any two numbers that will sum up to a given number?


function sumOfTwo(arr, sum) {
    let resultMap = {}

    for(let i=0;i<arr.length;i++){
        let missingNum = sum-arr[i];
        if(missingNum in resultMap){
            resultMap.push(arr[i]);
            return true;
        }
        resultMap[missingNum] = arr[i];
    }

    return false;
}