'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3 - Matrix_Row_Sum
write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.
Avoid utilizing any of the built-in methods available to your language.

Example : 
Input	                                   Output
[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]	   [6, 15, 18]
[ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ]    [6, 5, 20]

------------------------------------------------------------------------------------------------ */

function matrixSum(matrix) {
    let result = [];
    let initialResult = 0;

    for (let i=0 ; i<matrix.length ; i++) {
        for (let j=0 ; j<matrix[i].length ; j++){
            initialResult = initialResult + matrix[i][j];
        }
        result.push(initialResult);
        initialResult = 0;
    }
    return result;
}

describe('Test challenge 04' , ()=>{
    test ('Should return a modified array ', ()=>{
        expect(matrixSum([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toStrictEqual([6, 15, 18]);
        expect(matrixSum([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toStrictEqual([6, 5, 20]);
    });

    test ('Should Test the length ', ()=>{
        expect([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ].length).toStrictEqual([6, 15, 18].length);
        expect([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ].length).toStrictEqual([6, 5, 20].length);
    });
})
