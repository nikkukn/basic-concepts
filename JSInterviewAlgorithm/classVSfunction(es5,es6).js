// Q - es5 vs es6 declaration

// ES5

function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.eat = function(amount) {
    this.energy+=amount;
}

Animal.prototype.sleep = function (length) {
    this.energy += length
}
  
Animal.prototype.play = function (length) {
    this.energy -= length
}

const leo = new Animal("Leo", 4)


// es6 class representation

class Animal{
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        this.energy+=amount;
    }

    sleep(length){
        this.energy += length;
    }

    play(length){
        this.energy -= length;
    }
}


// Now for the sub-class Dog, in ES5, here’s what we will have.

function Dog(name, energy, breed){
    Animal.call(this, name, energy);
}

Dog.prototype = Object.create(Animal.prototype)
// In the above I could have also used the below format
// Dog.prototype = new Animal()

Dog.prototype.bark = function () {
  console.log('Woof Woof!')
  this.energy -= .1
}

Dog.prototype.constructor = Dog;


// extensions using javascript
class Dog extends Animal {
    constructor(name, energy, breed) {
      super(name, energy) // calls Animal's constructor
  
      this.breed = breed
    }
    bark() {
      console.log('Woof Woof!')
      this.energy -= .1
    }
}