//  Q - You are asked to implement an async function helper, race() which works like Promise.race(). Different from parallel() that waits for all functions to finish, race() will finish when any function is done or run into error.


function race(funcs){
    let isPromiseResolveOnce = false;
    return function(callBack){
        funcs.forEach(func => {
            func((err, data)=> {
                if(isPromiseResolveOnce){
                    return;
                }

                callBack(err, data);
                isPromiseResolveOnce = true;
            })
        });
    }
}