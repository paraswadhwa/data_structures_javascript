class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // helper method which creates a new node to 
    // be inserted and calls insertNode
    insert(data) {
        // Creating a node and initailising 
        // with data 
        var newNode = new Node(data);

        // root is null then node will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the 
            // tree and add the node
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data 
    insertNode(node, newNode) {
        // if the data is less than the node
        // data move left of the tree 
        if (newNode.data < node.data) {
            // if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else

                // if left is not null recurr until 
                // null is found
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node
        // data move right of the tree 
        else {
            // if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recurr until 
                // null is found
                this.insertNode(node.right, newNode);
        }
    }

    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // returns root of the tree
    getRootNode() {
        return this.root;
    }

}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

let root = BST.getRootNode();
BST.preorder(root);