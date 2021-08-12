// Q - How would you compare two objects in JavaScript?



function isEqual(a, b){
    let aProps = Object.getOwnPropertyNames(a); // returns property names array.
    let bProps = Object.getOwnPropertyNames(b);

    if(aProps.length!==bProps.length) return false;


    for(let i=0;i<aProps.length;i++){
        let propName = aProps[i];

        if(propName!==bProps[i]){
            return false;
        }
    }


    return true;
}