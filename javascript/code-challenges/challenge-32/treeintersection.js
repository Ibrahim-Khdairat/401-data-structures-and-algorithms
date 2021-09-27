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
class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        // hashing key
        let hash = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;



        return hash;
    }


    add(key, value) {
        //store the key in array
        let hash;
    if (typeof key == "number") {
        hash=key;
    }else{
        let hash = this.hash(key);
    }
        //if empty , create new linkedlist
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }

        // check the key is unique

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
                    ;
                }
                pointer = pointer.next

            }
        }
        else {
            return false;
        }


    }

    repeatedWord(string) {

        let words = string.split(' ');
        // store stringd in array
        // console.log(words);
        let key;
        let hash;
        //loop through array
        for (let i = 0; i < words.length; i++) {
            // console.log(words[i].toLowerCase());
            // convert all word to lower case to be more truthy checking
            key = words[i].toLowerCase();
            this.add(key, ' ');
            hash = this.hash(key);
            if (this.map[hash].head.next) {
                return key;
            }

        }




    }

    treeIntersection(treeOne, treeTow) {
        let key;
        let hash;

        let output = [];
        let c = 0;

        let recursive = (node) => {
            key = node.value;
            // console.log('>>>>>>>>>>>>>',key);
            this.add(key, ' ');
            if (c > 0) {
                if (typeof key == "number") { (hash = key) }
                else { this.hash(key); }

                if (this.map[hash].head.next) {
                    output.push(hash);
                }
            }
            if (node.left) {
                recursive(node.left);
            }
            if (node.right) {
                recursive(node.right);
            }
        };
        recursive(treeOne.root);
        c++;
        recursive(treeTow.root);
        // Return array contain the common nodes between two trees
        return output;
    }


}







let myhash = new HashTable(50);
myhash.add('Mariam', 'developrer');
myhash.add('Lossy', 'Cat');
myhash.add('23', 'age');
myhash.add('Cat', 'TA');
myhash.add('Timea', 'Student');

myhash.map.forEach((data, i) => {
    console.log(i, data && data.values());
});

module.exports = HashTable;