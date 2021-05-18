class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    reverseLinkedListUsingRecursion() {
        let current = this.head;

        if(!current) {
            return;
        }else {
            // if it is the last node of the linked list
            if(!current.next){
                this.head = current;
                current.next = current.prev;
                return;
            }

            this.reverseLinkedListUsingRecursion(current, current.next)
            current.next = prev;
        }
    }
}