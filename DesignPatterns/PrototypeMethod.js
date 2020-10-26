/*
This is a object based creational design pattern. In this we use a skeleton of existing
object to create and instantiate new objects.


This pattern uses prototypal inheritance instead of class object oriented inheritance.
*/


const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    }
}

const myCar = Object.create(car, { owner: { value: 'John' } });


console.log(myCar.__proto__ === car);
