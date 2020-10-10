/*
Create a promise from scratch

Promises is a simple Javascript Object with special methods that allows to execute synchronously.
Once client recieves response from server it start to execute the then part of the object.


****IMPORTANT*****
Since promise will be called with resolve and reject functions like 
promise.then(resolve, reject) 
we need to bind the resolve and reject functions explicitly in the contructor as they point to promise object.


For more details refer the link- https://www.youtube.com/watch?v=4GpwM8FmVgQ&ab_channel=LowLevelJavaScript
*/


class CustomPromise {
    state = "PENDING"
    value = undefined
    thenCallbacks = []
    errorCallbacks = []
    finallyCallbacks = []

    constructor(fn) {
        fn(this.resolve().bind(this), this.reject().bind(this));
    }

    resolve(response) {
        this.state = "RESOLVED"
        this.value = response;
        this.thenCallbacks.forEach((callback) => {
            callback(response) // will return the reponse to request made to object
        })
    }


    reject(error) {
        this.state = "REJECTED"
        this.value = error;
        this.errorCallbacks.forEach((callback) => {
            callback(error) // will return error in case the request fail
        })
    }

    then(callback) {
        let controlledPromise = new CustomPromise()
        this.thenCallbacks.push([controlledPromise, this.resolve, this.catch])

        if (this.state === "RESOLVED") {
            this.resolve();
        } else if (this.state === "REJECTED") {
            this.reject();
        }
        return controlledPromise;
    }

    catch(callback) {
        this.errorCallbacks.push(callback)
        return this
    }

    finally(callback) {
        this.finallyCallbacks.push(callback)
        return this
    }
}


// using the custom promise
let promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi there!")
    }, 1000)
})

promise.then(function (callbacks) {
    console.log("resolved")
}).catch(function () {
    console.log("rejected")
})