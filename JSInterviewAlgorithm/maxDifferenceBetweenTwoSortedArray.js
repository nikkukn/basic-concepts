// Q - Find the max difference of elements from two sorted array with non duplicate integer elements
// arr1 = [2,3,4,5,6,99], arr2= [2,44,55,66, 1000]
function findMaxDiffBetweenTwoArrays(arr1, arr2){
    let maxEle, minEle;
    if(arr2[arr2.length-1]>arr1[arr1.length-1]){
        maxEle = arr2[arr2.length-1]
        minEle = arr1[0]
    }else {
        maxEle = arr1[arr1.length-1]
        minEle = arr1[0]
    }

    return maxEle - minEle;

}