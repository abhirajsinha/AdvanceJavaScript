// Function Statement aka Function Declaration
function a (){
    console.log(`This is a function statement`);
}

//Function Expression
var b = function () {
    console.log("Function Expression");
}

//Named Function Expression
var n = function xyz() {
    console.log("Named unction Expression");
}

/* If we call xyz() it will give a error, xyz() is not defined 
   because xyz() is not creatd in the global scope
*/



/* Difference between Function Expression and Function Declaration

        The major difference between them is hoisting
            when we call function a before defining it, it will call the function
            but in case of function b if we call it before the expression then it will give error because here we are assigning the function in a variable, 
            which will be undefined and we won't call a undefined function

*/

// Anonyms Function

/* A function without a name is called a function expression */


/* This will give a error, we can't create Anonyms Function like this

    function () {

    }

*/

 

