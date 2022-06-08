//iS the square of the number is even or not

//Imperative way
const x=5;

const xSquared = x*x;

let isEven;

if(xSquared %2 === 0){
    isEven=true;
}else{
    isEven=false; 
}

console.log("Given value is Even,",isEven);





//Declarative way
const isSquaredEven = (x) => ((x*x)%2===0?true:false);

console.log(isSquaredEven(5));