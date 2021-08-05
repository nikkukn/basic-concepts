// Q - How can you match substring of a sting?

function findSubString(str, subStr) {
    let idx = 0, i=0, j=0, len = str.length, subLen = subStr.length;
    for(;i<len;i++){
        if(str[i]===subStr[j]){
            j++;
        }else {
            j=0;
        }

        idx = i

        if(j===subLen)
            return idx;
    }

    return -1;
}