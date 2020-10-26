/*
Factory pattern is a class based creational pattern. In this we provide a generic interface that delegates
the responsibility of object instantiation to its subclasses.

This pattern is used to manage and manipulate collections of objects that are different and yet have same
characterstics.

In this we managed the Football and BasketBall which are different yet with similar characterstics
*/


class BallFactory {
    constructor() {
        this.createBall = function (type) {
            let ball;

            if (type === "football" || type === "soccer") ball = new Football();
            else if (type === "basketball")
                ball = new BasketBall();

            ball.roll = function () {
                return `${this._type} is rolling...`
            }

            return ball;
        }
    }
}

class Football {
    constructor() {
        this._type = "football";
        this.kick = function () {
            return `You kicked a football!`
        }
    }
}


class BasketBall {
    constructor() {
        this._type = "basketball";
        this.kick = function () {
            return `You kicked a basketball!`
        }
    }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.