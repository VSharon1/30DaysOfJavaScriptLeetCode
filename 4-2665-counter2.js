/*
Problem:

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:
Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

Example 2:
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 

Constraints:
-1000 <= init <= 1000
0 <= calls.length <= 1000
calls[i] is one of "increment", "decrement" and "reset"
*/

/*
Theory:
Solving the problem using a Class.

A class is a template for creating objects with a set of properties and methods.

In the following example the Couter is the name of the class.

The constructor method is a special method that is called when an object is created based on the class.
It initializes the object with properties init and initCopy. 
The increment(), decrement()and reset() method are regular methods that can be called on an instance of the Counter class to get the output
To create an object based on a class we use the new operator i.e. we create an object called createCounter based on the Counter class, passing in the init value as arguments to the constructor.

    class Counter {
        constructor(init) {
            this.init = init;
            this.initCopy = init;
        }

        increment() {
            this.initCopy += 1;
            return this.initCopy;
        }

        decrement() {
            this.initCopy -= 1;
            return this.initCopy;
        }

        reset() {
            this.initCopy = this.init;
            return this.initCopy;
        }
    }

    const createCounter = function(init) {
        return new Counter(init);
    };
*/

/*
Solution:
*/
// The function is supposed to return an object.
const createCounter = (init) => {
    let initCopy = init
    return {
        // The value is incremented before being returned.
        increment: () => ++initCopy,

        // The value is decremented before being returned.
        decrement: () => --initCopy,

        reset: () => initCopy = init
    }
};