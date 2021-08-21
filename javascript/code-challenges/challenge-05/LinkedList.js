'use strict';

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
    // to initialize new node and make it a head in case we do not have one
    // append(value) {
    //     const node = new Node(value);
    //     if (!this.head) {
    //         this.head = node;
    //         return this;
    //     }
    //     let current = this.head;
    //     while (current.next) {
    //         current = current.next;

    //     }
    //     current.next = node;
    //     return this;
    // }
    includes(value) {
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value == value) {
                return true;
            } else {
                return false;
            }
        }
    }

    toString() {
        let values = this.head;
        let result = [];
        while (values.next !== null) {
            result.push(values.value)
        }
        let strRes = result.toString();
        return strRes;
    }
}

module.exports = LinkedList;