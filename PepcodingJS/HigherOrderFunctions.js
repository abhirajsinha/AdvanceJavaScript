let arr = [1,2,3,4,5];

//map
let mappedArr = arr.map(function(x){
    return x*x;
})

console.log(mappedArr);


//filter
let filterArr = arr.filter(function(x){
    return x%2==0;
})

console.log(filterArr);


//reduce
let sumArrReduce = arr.reduce(function(accumulator,x){
    return accumulator+x;
},0)

//value of accumulator is 0 in the beginning which is passed at last in the function, it behaves same as a vaiable
console.log(sumArrReduce);