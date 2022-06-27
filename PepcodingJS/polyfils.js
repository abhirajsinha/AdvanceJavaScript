//Map Function
// let myArr = [1,2,3,4,5];

// let mappedArr = myArr.map(function(x){
//     return x*x;
// })

// console.log(mappedArr);

//Custome Map Function
// let myArr = [1,2,3,4,5];

// function myPolyfils(myArr,cb){
//     let newArr=[];

//     for(let i=0;i<myArr.length;i++){
//         newArr.push(cb(myArr[i]));
//     }

//     return newArr;
// }


// function square(x){
//     return x*x;
// }

// console.log(myArr);
// console.log(myPolyfils(myArr,square));



//Filter Function
// let fArr=[2,4,6,1,3,5];

// let evenArr = fArr.filter(function(x){
//     return x%2==0;
// })

// console.log(fArr);
// console.log(evenArr);


//Custom filter function
let fArr=[2,4,6,1,3,5];
function myPolyfilFilter(filterArr,cb){
    let evenArr = [];

    for(let i=0;i<filterArr.length;i++){
        if(cb(filterArr[i])){
            evenArr.push(filterArr[i]);
        }
    }

    return evenArr;
}

function isEven(x){
    if(x%2==0) return x;
}

console.log(fArr);
console.log(myPolyfilFilter(fArr,isEven));

