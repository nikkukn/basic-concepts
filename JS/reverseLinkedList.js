/*
Program to reverse a linked list.
1->2->3->4
4->3->-2->1
*/


class Node {
    constructor(data) {
        this.next = null
        this.data = data;
        this.prev = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addElement(element) {
        // head points to the first element

        let node = new Node(element);

        let current;
        if (this.head === null) {
            this.head = element;
        } else {
            current = this.head;

            while (current) {
                current = current.next;
            }

            current.next = node;
        }

    }

    reverseLinkedList() {
        if (this.head === null)
            return
        else {
            let current = this.head;

            while (current) {
                let prevElement = current.prev;
                current.prev = current.next;
                current.next = prevElement;
            }
        }
    }
}


