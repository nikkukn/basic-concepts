// Q - You are asked to implement an async function helper, parallel() which works like Promise.all(). Different from sequence(), the async function doesn't wait for each other, rather they are all triggered together.


function parallel(funcs){
   
    return function(callback) {
        let isError = false;
        let res = [];

        funcs.map((func, index)=> {
            func((err, data)=> {
                if(!isError){
                    if(err){
                        isError = true;
                        callback(err, undefined);
                    }

                    res.push(data);
                    if(index === funcs.length-1){
                        callback(undefined, res);
                    }
                }
            })
        })
    }
}

/*
 return function(callBack){
    let isError = false;
    const res = []

    funcs.map((func, index)=> {
      func((error, data)=> {
        if(!isError){
          if(error){
            isError = true;
            callBack(error, undefined)
          }
          res.push(data);
          if(res.length===funcs.length){
            callBack(undefined, res)
          }
        }
      })
    })
  }
*/