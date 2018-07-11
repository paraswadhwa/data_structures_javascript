class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtEnd(element) { // adds an element at the end of list
        let node = new Node(element);
        let current;
        // if list is Empty add the element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }

    insertAtFront(element) { // adds an element at the start of list
        let node = new Node(element);
        let current;
        // if list is Empty add the element and make it head
        if (this.head == null)
            this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAtIndex(element, index) {

    }

    deleteFromEnd() {
        let current, prev;
        if (this.head == null) {
            console.log('nothing to remove');
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            current = this.head;
            while (current.next) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
        }
        this.size--;
    }

    deleteFromFront() {
        let current;
        if (this.head == null) {
            console.log('nothing to remove');
        } else {
            current = this.head;
            current = current.next;
            this.head = current;
        }
        this.size--;
    }

    findMiddleElement() {
        let current = this.head;
        let slow_ptr = this.head;
        let fast_ptr = this.head;

        if (current) {
            while (fast_ptr != null && fast_ptr.next != null) {
                fast_ptr = fast_ptr.next.next;
                slow_ptr = slow_ptr.next;
            }
            return slow_ptr.data;
        }
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        return str;
    }

}

// creating an object for the Linkedlist class
let ll = new LinkedList();

ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.deleteFromEnd();
ll.insertAtFront(40);
ll.insertAtFront(50);
ll.deleteFromFront();

console.log("Contents of linked list:", ll.printList());
console.log("Middle element of linked list:", ll.findMiddleElement());