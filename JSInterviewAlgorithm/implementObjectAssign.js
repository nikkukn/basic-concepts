// Q - implement Object.assign 

function objectAssign(target, ...sources){
    if(target===null || target=== undefined){
        throw new Error("target is null or undefined")
    }else {
        target = new Object(target);
        sources.map((ele)=> {
            if(ele===null || ele === undefined){
                return;
            }
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(ele));
        })
    }

    return target;
}

const key = Symbol('key')
const a = {
  [key]: 3,
  b: 4
}
const target = {}
objectAssign(target, a)