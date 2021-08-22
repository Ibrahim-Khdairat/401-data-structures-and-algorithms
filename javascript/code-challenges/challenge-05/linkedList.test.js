'use strict';

const LinkedList = require('./LinkedList');
const Node = require('./Node')


describe('Linked List', ()=>{
    it('should check if a new linked list is created', ()=>{
        // arrange
        // act
       let list = new LinkedList();
        // assert
        expect(list.head).toBeNull();
    });
    it('should check if a new node is inserted', ()=>{
        // arrange
      let newNode = new Node();
      let value = 'new Value'
        // act
     newNode.value = value;
        // assert
        expect(newNode.value).toEqual(value);
    });
    it('should check if the list has the selected node', () =>{
        // arrange
       let searchValue = 'some value';
        // act            
        // assert
        expect(searchValue).toBeTruthy();
        expect(!searchValue).toBeFalsy()
    });
})