// Q - find a rotation point of a sorted array.
//{15, 18, 2, 3, 6, 12} 


function findRotationInSortedArray(arr) {
    if(arr.length===0) return;
    else {
        let prev = arr[0];
        for(let i=1;i<arr.length;i++){
            if(prev>arr[i])
            return i;
            prev = arr[i];
        }
    }
    return -1;
}