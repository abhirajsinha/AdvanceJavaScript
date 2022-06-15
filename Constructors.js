function car(brand,model,color){
    this.Brand=brand;
    this.Model=model;
    this.Color=color;

    // console.log(this.Brand,this.Model,this.Color);
}

let car1=new car("BMW","X5","Black");
let car2=new car("Audi","L3","Red");

console.log(car1);
console.log(car2);

//Modify in object
car1.Brand="Mercedes";
console.log(car1);


car2.Color="Midnight Black";
console.log(car2.Color);