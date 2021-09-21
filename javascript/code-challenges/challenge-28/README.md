# Quick Sort
<!-- Short summary or background information -->
Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

## Challenge
<!-- Description of the challenge -->
First find the “pivot” element in the array.
Start the left pointer at first element of the array.
Start the right pointer at last element of the array.
Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.
Increment the left pointer and decrement the right pointer.
If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
BigO:
Time:O(log(n))
Space:O(1)

## Whiteboard Process
<!-- Embedded whiteboard image -->
![quickSort](/code-challenge28/quickSort.png)