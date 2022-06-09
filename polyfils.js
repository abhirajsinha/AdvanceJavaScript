//Map
// let myArr = [1,2,3,4,5];

// let mappedArr = myArr.map(function(x){
//     return x*x;
// })

// console.log(mappedArr);

//Custome Map
let myArr = [1,2,3,4,5];

function myPolyfils(myArr,cb){
    let newArr=[];

    for(let i=0;i<myArr.length;i++){
        newArr.push(cb(myArr[i]));
    }

    return newArr;
}


function square(x){
    return x*x;
}

console.log(myArr);
console.log(myPolyfils(myArr,square));
