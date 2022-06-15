function add(a,b){
    console.log(a+b);
}

let addWith2 = add.bind(this,2);
console.log(addWith2);
addWith2(5);
