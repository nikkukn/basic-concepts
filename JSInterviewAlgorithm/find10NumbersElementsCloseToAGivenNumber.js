// Q - from an array of integers find 10 numbers closest to a given number


function find10NumbersCloseToANum(arr, num){
    let numDiffMapping = {}, result = [];
    arr.sort((a,b)=> a-b);

    let len = arr.length;

    if(len<=10) return arr;
    else{
        for(let i=0;i<arr.length;i++){
            let diff = Math.abs(num - arr[i])
            if(numDiffMapping[diff]){
                numDiffMapping[diff].push(arr[i])
            }else {
                numDiffMapping[diff] = [arr[i]]
            }
        }
    }


    console.log("numDiffMapping", numDiffMapping)
    for(let k in numDiffMapping){
        if(result.length===10){
            break;
        }
        result = [...result, ...numDiffMapping[k]]
    }

    return result;
}