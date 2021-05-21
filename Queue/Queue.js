class Queue {
    constructor(){
        this.queue = []
    }

    getLength() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(item) {
       return this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }
}