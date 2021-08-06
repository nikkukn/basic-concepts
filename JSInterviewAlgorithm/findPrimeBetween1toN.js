// Q - display prime numbers up to n.
// [2,3] => 4
function findNumberIsPrime(arr, val){
    let finalResult = true;
    for(let j=0;j<arr.length;j++){
        if(val%arr[j]===0){
            finalResult = false;
            break;
        }
    }
    return finalResult;
}


function primeNumberBetween1toN(n){
    let result = [];
    for(let i=2;i<=n;i++){
        if(result.length===0){
            result.push(i);
        }else {
            if(findNumberIsPrime(result, i)){
                result.push(i)
            }
        }
    }
    result.unshift(1);
    return result;
}