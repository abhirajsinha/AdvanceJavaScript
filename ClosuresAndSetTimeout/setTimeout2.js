/* Now here we want to print 1 to 5 in each second 
    So at first we think we should use a for loop 1 to 5 and put our setTimeout function under the loop and it will print 1 to 5 after each 1 second
    So let's check it out
*/


/*
function x() {
    var i = 1;
    for(var i=1;i<=5;i++){
        setTimeout(function () {
            console.log(`Value of i after`,i ,'Seconds', i);
        }, 100);
    }

    console.log(`Print values 1 to 5 one by one after 1 second`);
}

x();
*/

/* Output

    Print values 1 to 5 one by one after 1 second
    Value of i after 6 Seconds 6
    Value of i after 6 Seconds 6
    Value of i after 6 Seconds 6
    Value of i after 6 Seconds 6
    Value of i after 6 Seconds 6

*/

/* Here it is printing 6 every time,

        Remember the concept of closures, it says that function will be bundled together along with its lexical scope
        so here when i value will become i for every setTimeout function that has been called before all of them will point to i=6 value
        because variable points to reference not to values
*/


/* Solution 

        We need to use let here instead of var, because every time let creates a whole new memory/reference for the variable,
        whereas var changes just updates the values at the same reference
*/

function x() {
    var i = 1;
    for(let i=1;i<=5;i++){
        setTimeout(function () {
            console.log(`Value of i after`,i ,'Seconds', i);
        }, 1000);
    }

    console.log(`Print values 1 to 5 one by one after 1 second`);
}

x();
 
/* Output 

    Print values 1 to 5 one by one after 1 second
    Value of i after 1 Seconds 1
    Value of i after 2 Seconds 2
    Value of i after 3 Seconds 3
    Value of i after 4 Seconds 4
    Value of i after 5 Seconds 5

*/  