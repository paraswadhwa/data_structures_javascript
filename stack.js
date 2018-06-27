// Stack - LIFO(Last In First Out) - linear data structure

//We would be implementing Stack Data Structure in Javascript

class Stack {

    constructor() {
        this.items = [];
        this.stackLength = 5; // max 5 elements can be inserted in stack
    }

    push(item) { // add an item to the top of stack
        if (!this.isFull()) {
            this.items.push(item);
            return item;
        } else {
            return "Stack max limit reached";
        }
    }

    pop() { // remove an item from the top of stack
        if (!this.isEmpty()) {
            return this.items.pop();
        } else {
            return "Stack is empty";
        }
    }

    printStack() { // print all elements of the stack
        let str = "";
        this.items.forEach(function(x) {
            str = str + x + " ";
        });
        return str;
    }

    isEmpty() { // check if the stack has no elements in it
        return this.items.length == 0;
        // return true if stack is empty
    }

    isFull() { // check if the stack has max no of elements in it
        return this.items.length == 5;
        // return true if stack is full
    }

}

let stack = new Stack();

console.log('Item pushed:', stack.push(10));
console.log('Item pushed:', stack.push(20));
console.log('Item pushed:', stack.push(30));
console.log('Item removed:', stack.pop());
console.log('Item removed:', stack.pop());
console.log('Stack contents:', stack.printStack());