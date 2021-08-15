

function promiseRace(promises){
    let isOnePromiseResolved = false;
    return new Promise((resolve, reject)=> {
        for(let i=0;i<promises.length;i++){
            if(isOnePromiseResolved) return;
            Promise.resolve(promises[i])
            .then((data)=> {
                resolve(data);
                isOnePromiseResolved = true;
            }).catch((error)=> {
                reject(error);
            })
        }
    })
}