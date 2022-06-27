// A function binds together with its lexical environment
//function along with its lexical scope bundeled together forms a clouser
//Go to MDN For more info



/* USES OF CLOSURES 

    Module Design System
    Currying
    Functions like once
    memoize
    maintaining state in async world
    setTimeouts
    Iterators
    
*/


/* Advantages of Closures

    -> Use in Data Hiding
    -> Use in Data Abstraction
*/

/* Disdvantages of Closures

        -> Overconsumption of memory , when we use closures
        -> those closed over variables are not garbage collected till the program expired, if not handled properly leads to memory leak
*/


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    // y();

    return y;
}


var temp = x();
console.log(temp); // here temp contains the function y because we have returned the function y in temp


// Now we can use function y outside x because of temp

temp();  // Copy of y function along with its lexical scope bundeled together 



/*
 ? How we are able to get function y(){} in temp ?

        Here in the function x(){} we have returned function y, So when we have returned the function y from function x, it will not only return the code of fucntion y,
        it will also returns the whole lexical scope of function y bundled together -> and this is called clouser

        That's why we are able to access a in temp;
*/



/*

This below code is same as above code

function x(){
    var a  =7;
    return function y(){
        console.log(a);
    }
}


var temp = x();
console.log(temp);
temp();

*/






