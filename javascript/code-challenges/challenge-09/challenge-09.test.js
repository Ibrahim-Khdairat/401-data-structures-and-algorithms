'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.heed = null;
    }

    append(newValue) {
        let newNode = new Node(newValue);

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    
}

let LinkedList_1 = new LinkedList();

LinkedList_1.append(1);
LinkedList_1.append(2);
LinkedList_1.append(3);
LinkedList_1.append(4);



console.log(LinkedList_1);



