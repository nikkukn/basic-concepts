// Q- How would you merge two sorted array?

const mergeTwoSortedArray = (a,b) => {
    let mergedArr = [];
    let aElm = a[0];
    let bElm = b[0];
    let i=0, b=0;

    if(a.length === 0 ) return b;
    if(b.length === 0 ) return a;

    while(aElm||bElm){
        if((aElm && !bElm) || (aElm<bElm)){
            mergedArr.push(aElm);
            i=i+1;
            aElm = a[i];
        }else{
            mergedArr.push(bElm);
            j=j+1;
            bElm = b[j];
        }
    }

    return mergedArr;
}