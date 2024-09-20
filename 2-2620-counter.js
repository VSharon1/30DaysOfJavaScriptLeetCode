/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:
Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

Example 2:
Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:
-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"
*/

/*
Theory:

Closures Versus Classes:

    function createAdder(a) {
    return function add(b) {
        const sum = a + b;
        return sum;
    }
    }
    const addTo2 = createAdder(2);
    addTo2(5); // 7

createAdder is very similar to a class constructor.

    class Adder {
    constructor(a) {
        this.a = a;
    }

    add(b) {
        const sum = this.a + b;
        return sum;
    }
    }
    const addTo2 = new Adder(2);
    addTo2.add(5); // 7

Apart from the differences in syntax, both code examples serve essentially the same purpose. 
They both allow a state to be passed in a "constructor" and have "methods" that access that state.

A key difference is that closures allow true encapsulation. 
In the class example, there's nothing to stop you writing addTo2.a = 3; and breaking the expected behaviour. 
In the closure example, however, it is theoretically impossible to access a. 
Note that as of 2022 true encapsulation is achievable in classes with # prefix syntax.

Another difference is how the functions are stored in memory. 
When many instances of a class have been created, each instance stores a single reference to the prototype object, where all the methods are stored. 
With closures, on the other hand, all the "methods" are created and a "copy" of each is stored in memory each time the outer function is called. 
For this reason, classes can be more efficient, especially when there are many methods.
*/

/*
Solution:
*/
// createCounter is a function, but returns another function.
const createCounter = (n) => {
    // returns and another function that returns n and then increments it.
    return () => n++
}

// counter is a function, not a value.
// const counter = createCounter(10);