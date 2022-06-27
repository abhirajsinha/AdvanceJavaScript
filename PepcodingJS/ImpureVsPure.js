//Impure Functions
                    // Functions which returns different result when called everytime
// let a=7;
// function addNum(b){
//     console.log(`The Sum is`, a+b);
// }

// addNum(2);


//Pure Functions
                // Functions which returns the same result when called with same set of arguments everytime

function addNum(a,b){
    // console.log(`the sum is`, a+b);// Side Effect of Pure Function
    return a+b;
}

addNum(2,3);