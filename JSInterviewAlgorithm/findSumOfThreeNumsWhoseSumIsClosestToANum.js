// Q - Finding three elements in an array whose sum is closest to a given number



// arr - [2,3,45,6,7,8,9,23,55,66,77], num - 100

// 100-2

function findSumOfThreeNumCloseToANum(arr, num){
    for(let i=0;i<arr.length-1;i++){
        let j = i+1;
        let k = n;

        while(k>=j){
            if(arr[i] + arr[j]+ arr[k]===num) return (arr[i], arr[j], arr[k]);
            // if the number is greater too big
            (arr[i]+arr[j]+arr[k]>num) ? k--: j++;
        }
        return [arr[i], arr[j], arr[k]]
    }    
}