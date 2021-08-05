// Q- How would you remove duplicate members from an array?

const removeDuplicate = (arr) => {
    return arr.reduce((acc, ele)=> {
        if(acc.indexOf(ele)=== -1){
            acc.concat(ele)
        }
        return acc;
    }, [])
}