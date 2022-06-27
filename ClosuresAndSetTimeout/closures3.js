/*Function chaining*/

function z() {
    b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
    return x;
}

var temp = z();

temp();

/* So here after lots of parent functions chaining it will behave same as previos functions and return the function along with its lexical scope bundeled together */
