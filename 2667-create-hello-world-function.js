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

Immediately Invoked Function Expression (IIFE):
You can create a function and immediately execute it in Javascript.

Function Hoisting:
JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. 
You can only do this if you declare functions with the function syntax, Arrow functions does not work!

Closures:
An important topic in JavaScript is the concept of closures. 
When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. 
The combination of the function and its enviroment is called a closure.

Omit Return:
If you can write the code in a single line, you can omit the return keyword. 

Rest Arguments:
You can use rest syntax to access all the passed arguments as an array.
Why?
It may not be immediately obvious why you would use this syntax because you can always just pass an array and get the same result.
The primary use-case is for creating generic factory functions that accept any function as input and return a new version of the function with some specific modification.
By the way, a function that accepts a function and/or returns a function is called a higher-order function, and they are very common in JavaScript.
*/

/*
Solution:
*/
const createHelloWorld = () => {
    return (...args) => 'Hello World';
};