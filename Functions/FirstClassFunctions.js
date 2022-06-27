/* First Class Functions in JS 

    -> The ability to use functions as values are known as first class functions
    -> Passed inside a function
    ->  Return from a function

*/


var c=function (param){
    return function (){

    }
}

console.log(c());


var b=function (param){
    return function xyz(){

    }
}

console.log(b());