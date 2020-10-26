/*
Constructor pattern is a class based pattern. They are used to instantiate new objects with methods and
properties defined by that function.
*/


//traditional function based syntax
function Hero(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;

    this.getDetails = function () {
        return this.name + 'can' + this.specialAbility;
    }
}

//ES6 class syntax
class Hero {
    constructor(name, specialAbility) {
        this._name = name;
        this._specialAbility = specialAbility;
        this.getDetails = function () {
            return `${this._name} can ${this._specialAbility}`
        }
    }
}


const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails()) // Iron Man can fly