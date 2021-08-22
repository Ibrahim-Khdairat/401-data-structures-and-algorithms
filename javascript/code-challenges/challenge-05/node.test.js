'use strict'

const Node = require('./Node')

describe('node testing', ()=>{
    it('should check if a new node is created', ()=>{
        // arrange
        let value = 'new node value';
        //act
        let node = new Node(value);
        //assert
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
})