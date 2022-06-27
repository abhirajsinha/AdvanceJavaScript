/* Lets change the value of a */
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}


var temp = x();
console.log(temp);

temp();

/*  So, Here we will get the value of a as 100 not 7 because a(variable) points to the refrence not the value, 
    that's why when we have replaced a with 100 that time only it have changed 7 to 100 in the memory
*/