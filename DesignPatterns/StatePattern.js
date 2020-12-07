/*
It is a behavioural pattern used to change state based on internal state changes. The
object returned by a state pattern class seems to change its class. It provides
state-specific logic to a limited set of objects in which each object type represents
a particular state.
*/

class TrafficLight {
    constructor() {
        this.states = [new GreenLight(), new RedLight(), new YellowLight()];
        this.current = this.states[0];
    }

    change() {
        const totalStates = this.states.length;
        let currentIndex = this.states.findIndex(light => light === this.current);

        if (currentIndex + 1 < totalStates)
            this.current = this.states[currentIndex + 1]
        else
            currentIndex = this.states[0];
    }

    sign() {
        return this.current.sign(); // sign function in each instance tell us the current action which is START, STOP or STEADY.
    }
}


class Light {
    constructor(light) {
        this.light = light;
    }
}


class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'STOP';
    }
}


class YellowLight extends Light {
    constructor() {
        super('Yellow');
    }

    sign() {
        return 'STEADY';
    }
}

class GreenLight extends Light {
    constructor() {
        super('Green');
    }

    sign() {
        return 'Walk';
    }
}



// usage
const trafficLight = new TrafficLight();

console.log(trafficLight.sign()); // 'GO'
trafficLight.change();

console.log(trafficLight.sign()); // 'STOP'
trafficLight.change();

console.log(trafficLight.sign()); // 'STEADY'
trafficLight.change();

console.log(trafficLight.sign()); // 'GO'
trafficLight.change();

console.log(trafficLight.sign()); // 'STOP'