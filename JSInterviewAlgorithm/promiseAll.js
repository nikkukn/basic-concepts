// 


function all(promises){
    return new Promise((resolve, reject)=> {
        const result = [];

        if(promises.length===0){
            resolve(result);
            return;
        }

        let countPending = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((value)=> {
                result[index] = value;
                countPending--;
                if(countPending===0){
                    resolve(result);
                }
            }, reject)
        });
    })
}


// using async await 

async function allPromise(promises){
    let result = [];

    for(let i=0;i<promises.length;i++){
        let tempRes = await promises[i];
        result.push(tempRes);
    }
}