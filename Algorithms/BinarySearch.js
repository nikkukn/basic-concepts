// function to do binary search in JS

function binarySearch(array, item) {
    let first = 0;
    let last = array.length;

    while(low<=high) {
        let mid = Math.floor((first+last)/2);
        let guess = array[mid];  //assign the variable as the middle element
        if(guess===item){
            return mid;
        }else{
            if(guess<item) {
                low = mid + 1; // when middle element is smaller than given element search in the right side of the list
            }else {
                high = mid - 1;  //when middle element is greater given element search in the left side of the list
            }
        }
    }
    return false;
}