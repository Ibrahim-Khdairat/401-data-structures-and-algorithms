'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Array-Insert-Shift
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
Example : 
  Input	                  Output
[2,4,6,-8], 5  	          [2,4,5,6,-8]
[42,8,15,23,42], 16       [42,8,15,16,23,42]

------------------------------------------------------------------------------------------------ */


function insertShiftArray(array , number){
    let index ;
    let indexPosition = array.length/2;

    if(indexPosition % 2 == 0 ){
        index = indexPosition;
    } 
    else {
        index = indexPosition + 1;
    }
    array.splice(index , 0 , number);
    return array;
}




describe('Test challenge 02' , ()=>{
    test ('Should return a modified array ', ()=>{
        expect(insertShiftArray([2,4,6,-8], 5 )).toStrictEqual([2,4,5,6,-8]);
        expect(insertShiftArray([42,8,15,23,42], 16 )).toStrictEqual([42,8,15,16,23,42]);
    })
})