'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3 - Array-Binary-Search
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
Example : 
  Input	                  Output
[2,4,6,-8],  6	          2
[42,8,15,23,42], 16       -1

------------------------------------------------------------------------------------------------ */


function BinarySearch(array , number){
    let index ;
   for (let i = 0 ; i < array.length ; i++){
       if(array[i] == number) {
           index = i;
       }
   }
   if (index==null) {
    index = -1
  }
   return index
}



describe('Test challenge 03' , ()=>{
    test ('Should return a modified array ', ()=>{
        expect(BinarySearch([2,4,6,-8], 6 )).toStrictEqual(2);
        expect(BinarySearch([42,8,15,23,42], 16 )).toStrictEqual(-1);
    })
})