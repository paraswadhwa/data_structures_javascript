// Queue - FIFO(First In First Out) - linear data structure

//We would be implementing Queue Data Structure in Javascript

class Queue {

    constructor() {
        this.items = [];
        this.queueLength = 5; // max 5 elements can be inserted in Queue
    }

    enqueue(item) { // add an item to the front of Queue
        if (!this.isFull()) {
            this.items.push(item);
            return item;
        } else {
            return "Queue max limit reached";
        }
    }

    dequeue() { // remove an item from the front of Queue
        if (!this.isEmpty()) {
            return this.items.shift();
        } else {
            return "Queue is empty";
        }
    }

    printQueue() { // print all elements of the Queue
        let str = "";
        this.items.forEach(function(x) {
            str = str + x + " ";
        });
        return str;
    }

    isEmpty() { // check if the Queue has no elements in it
        return this.items.length == 0;
        // return true if Queue is empty
    }

    isFull() { // check if the Queue has max no of elements in it
        return this.items.length == 5;
        // return true if Queue is full
    }

}

let queue = new Queue();

console.log('Item pushed:', queue.enqueue(10));
console.log('Item pushed:', queue.enqueue(20));
console.log('Item pushed:', queue.enqueue(30));
console.log('Item removed:', queue.dequeue());
console.log('Item removed:', queue.dequeue());
console.log('Queue contents:', queue.printQueue());