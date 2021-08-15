//  Q - implement promise.any


function promiseAny(promises){
    return new Promise((resolve, reject)=> {
        const errors = [];
        let errorCount = 0;

        promises.forEach((promise, index)=> {
            Promise.resolve(promise).then((data)=> {
                resolve(data);
            }).catch((error)=> {
                errors.push(error);
                errorCount++;


                if(errorCount === promises.length){
                    reject(new AggregateError(
                        'No Promise in Promise.any was resolved', 
                        errors
                    ))
                }
            })
        })

    })
}


/*

function any(promises) {
  // your code here
  return new Promise((resolve, reject)=> {
    const errors = []
    let errorCount = 0
    for(let i = 0; i < promises.length; i++){
      promises[i]
      .then(resolve)
      .catch((err)=> {
        errors[i] = err
        errorCount++;

        
        if (errorCount === promises.length) {
          reject(new AggregateError(
            'No Promise in Promise.any was resolved', 
            errors
          ))
        }
      })
    }
  })
  
}

*/