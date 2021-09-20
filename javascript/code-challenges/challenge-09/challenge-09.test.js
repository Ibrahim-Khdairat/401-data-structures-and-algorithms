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
        // this.tail = null;
        // this.length = 0;
    }
    
    append(value) {
        const node = new Node(value);
        if (this.head) {
            
            
            node.next = this.head;
            
            
            
        }
        this.head = node;
        // this.length = this.length + 1;
        // return this;

    }
    toString() {
      
        let current = this.head;
        let str=" ";
        while (current) {
            str=str+`[${current.value}] -> `;
            current=current.next;
            
        }
        str=str+'X';
        return str;
        
    }

    reverseList(list){
        let newList=new LinkedList();
        let current=list.head;

        while(current){
            newList.append(current.value);
            current=current.next;
        }
        // console.log('hgyjytjuyk',newList);
        return ` head ->${newList.toString()}`;

    }

   


}

module.exports = LinkedList;