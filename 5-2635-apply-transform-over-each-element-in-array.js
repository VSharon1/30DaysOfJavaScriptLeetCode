/*
Problem:

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 

Example 2:
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.

Example 3:
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

Constraints:
0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number
*/

/*
Theory:

.map:
It is a concept of Functional Programming.

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
The map() method does not change the original array.
The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. 
The map() method does not execute the function for empty elements.

Syntax:
map((element, index, array) => { })

Parameters:
element: It is a required parameter and it holds the value of the current element.
index: It is an optional parameter and it holds the index of the current element.
arr: It is an optional parameter and it holds the array.
*/

/*
Solution:
*/
const map = (arr, fn) => {
    const arrTransformed = [];

    arr.forEach((element, index) => {
        arrTransformed[index] = fn(element, index);
    });

    return arrTransformed
};