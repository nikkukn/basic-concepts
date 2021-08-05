// Q- Count Total number of zeros from 1 upto n?

function countZero(n) {
    let count =0;

    while(n>0){
        count+= Math.floor(n/10);
        n = n/10;
    }

    return count;
}