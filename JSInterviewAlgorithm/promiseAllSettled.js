//  Q - Different from Promise.all() which rejects right away once an error occurs, Promise.allSettled() waits for all promises to settle.


function allSettled(promises){
    let res = [], completed = 0;

    if(promises.length ===0){
        return Promise.resolve([]);
    }

    return new Promise((resolve)=> {
        if(res.length===promises.length){
            resolve(res);
        }
        promises.forEach((promise, index)=> {
            Promise.resolve(promise).then((data)=> {
                res[index] = {status: "fulfilled", value: data};
            }).catch((error)=> {
                res[index] = {status: "rejected", reason: error};
            }).finally(()=> {
                completed++;
                if(completed===promises.length){
                    resolve(res);
                }
            })
        })
    })
}

//  ----- another solution ------


async function allSettledUsingAsync(promises){
    let res = []

    for(let i=0;i<promises.length;i++){
        try{
            let tempRes = await promises[i];
            res[i] = {status: "fulfilled", value: tempRes};
        }
        catch(error){
            res[i] = {status: "rejected", value: error};
        }
    }

    return res;
}


