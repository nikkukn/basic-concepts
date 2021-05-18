class Node {
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size;
    }

    revrseLinkedListWithoutRecurrsion() {
        let current = this.head; // track the current element
        let prev = null; // track the previous element of the current element
        let save; // track the next element of the current element.

        while(current) {
            save = current.next;
            current.next = prev;
            prev = current;
            current = save;
        }
        this.head = save; // when reached at the last element of the list.
    }
}