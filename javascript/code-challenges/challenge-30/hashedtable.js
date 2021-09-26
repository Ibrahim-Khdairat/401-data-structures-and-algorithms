'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashedTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    // To create a hashed key from the key
    hash(key) {
        let hash = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0)
        }, 0) * 599 % this.size;

        return hash;
    }

    // To set the HashedTable with the keys and values
    set(key, value) {
        //create new hash from the key
        let hash = this.hash(key);

        //check if the array doesn't existed create a new linkedlist instead
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }

        let bucket = { [key]: value };
        this.map[hash].add(bucket);
    }


    get(key) {
        //store the key in array
        let hash = this.hash(key);

        //if found values and key start getting value by point in the head.
        if (this.map[hash]) {
            let pointer = this.map[hash].head

            // traverse through linkedlist
            while (pointer) {
                // returned values
                if (pointer.value[key]) {

                    return pointer.value[key];
                    ;
                }
                pointer = pointer.next

            }
        }
        else {
            return 'empty';
        }


    }

    contains(key) {
        //store the key in array
        let hash = this.hash(key);

        //if found values and key start getting value by point in the head.
        if (this.map[hash]) {
            let pointer = this.map[hash].head

            // traverse through linkedlist to search about value
            while (pointer) {
                // returned true or false
                if (pointer.value[key]) {
                    return true;
                }
                pointer = pointer.next
            }
        }
        else {
            return false;
        }
    }
}

// let newHash = new HashedTable(10);
// newHash.set('Ibrahim', 'Developer');
// newHash.set('Maram', 'Student');
// newHash.set('Israa', 'TA');
// newHash.set('Justin', 'Instructor');
// newHash.set('Shery', 'Cat');

// newHash.map.forEach((data, i) => {
//     console.log(i, data && data.values());
// });





module.exports = {
    HashedTable,
    LinkedList,
    Node
};