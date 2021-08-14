// Q - You are asked to implement an async function helper, sequence() which chains up async functions, like what pipe() does.


function sequence(funcs){
    let i = 0; 
    // return type of the function has data property.
    return function helper(callback, data) {
        // when all the functions are executed return data.
        if(i===funcs.length) return callback(undefined, data);

        // execute function with initial as second parameter. Take the output from each function call and send it as data to another function call.
        funcs[i++]((err, funcdata)=> {
            if(err){
                callback(err);
                return;
            }
            helper(callback, funcdata);
        }, data);
    }
}

const asyncTimes2 = (callback, num) => {
    setTimeout(() => callback(null, num * 2), 100)
 }
 const asyncTimes4 = sequence(
   [
     asyncTimes2,
     asyncTimes2
   ]
 )