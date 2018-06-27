class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }
    // adds an element at the end of list
    add(element) {
        var node = new Node(element);
        var current;
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

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

// creating an object for the Linkedlist class
var ll = new LinkedList();

ll.add(10);
ll.add(20);

ll.printList();