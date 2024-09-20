/*
Problem:

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

Example 1:
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

Example 2:
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

Constraints:
0 <= args.length <= 10
*/

/*
Theory:

Closures:
An important topic in JavaScript is the concept of closures. 
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (lexical environment).
In other words, a closure gives a function access to its outer scope.
The combination of the function and its environment is called a closure.

Spread Operator:
Is used to access all the passed arguments as an array and it is a good way to concatenate arrays.

Higher Order Functions:
A function that accepts a function and/or returns a function.

Immediately Invoked Function Expression (IIFE):
A function that has been created and immediately executed.

Function Hoisting:
Is a feature in JavaScript that sometimes allows a function to be used before it is initialised. 
It only works with function syntax and not with arrow functions!

Omit Return:
If a function can be written in one line, the return keyword can be omitted.
*/

/*
Solution:
*/
const createHelloWorld = () => {
    return (...args) => 'Hello World';
};