'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Reverse Array
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
Example : 
  Input	                  Output
[1, 2, 3, 4, 5, 6]  	[6, 5, 4, 3, 2, 1]

------------------------------------------------------------------------------------------------ */

function reverseArray(array) {
    let result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }

    return result;
}


describe('Test challenge 01' , ()=>{
    it ('Should return reversed array', ()=>{
        expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
        expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
    })
})