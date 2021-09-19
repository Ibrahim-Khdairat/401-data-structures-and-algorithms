'use strict';

// Input  [8,4,23,42,16,15]
// Output [4,8,15,16,23,42]


function  InsertionSort (array) {
    for (let i = 0 ; i < array.length ; i++) {
        let minValue  ;
        for (let j = 0 ; j < array.length ; j++) {
            if (array[j] > array[i]) {
                minValue = array[i];
                array[i] = array[j];
                array[j] = minValue;
            }
        }
    }
    return array;
}


describe('Test challenge 26' , ()=>{
    test ('Should return a sorted array ', ()=>{
        expect(InsertionSort([8,4,23,42,16,15])).toStrictEqual([4,8,15,16,23,42]);
    })
})